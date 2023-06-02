import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { useSelector } from 'react-redux'

import { ApolloClient, InMemoryCache, gql, useMutation } from '@apollo/client'
const CREATE_PAYMENT = gql`
mutation CreatePayment($input: CreatePaymentInput!) {
  createPayment(input: $input) {
    id
    externalId
    payerFistName
    payerLastName
    currencyCode
    totalAmount
    type
    user
    createdAt
    updatedAt
  }
}`
const UPDATE_ORDER = gql`
mutation UpdateOrder($updateOrderId: ID!, $input: UpdateOrderInput!) {
  updateOrder(id: $updateOrderId, input: $input) {
    success
    msg
    data {
      id
    }
  }
}
`
const PaymentSection = ({ totalCost, orderId, setIsPaid }) => {
  const userSlice = useSelector((state) => state.user)

  const initialOptions = {
    'client-id': 'Af7FSeQMWm_VZujM5kJj6pfZoUI1yDrWrdHph_6CLwDphhUeOLzIGfZA5EfdksRrDZm7BC15Q-sWYBhL',
    currency: 'USD',
    'disable-funding': 'card',
  }
  const [createPaymentMutation] = useMutation(CREATE_PAYMENT, {
    context: {
      headers: {
        Authorization: `Bearer ${userSlice.token}`,
      },
    },
    client: new ApolloClient({

      uri: process.env.NEXT_PUBLIC_GRAPHQL_BACKEND_URL,
      cache: new InMemoryCache(),
    })
  })
  const [updateOrderMutation] = useMutation(UPDATE_ORDER, {
    context: {
      headers: {
        Authorization: `Bearer ${userSlice.token}`,
      },
    },
    client: new ApolloClient({

      uri: process.env.NEXT_PUBLIC_GRAPHQL_BACKEND_URL,
      cache: new InMemoryCache(),
    })
  })
  const handleSubmitPayment = async (details) => {
    try {
      // const paymentUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/payment`
      const paymentInfo = {
        externalId: details.id,
        payerFistName: details.payer.name.given_name,
        payerLastName: details.payer.name.surname,
        currencyCode: details.purchase_units[0].amount.currency_code,
        totalAmount: details.purchase_units[0].amount.value,
        type: 'paypal',
      }
      
      // const createPayment = await axios.post(paymentUrl, paymentInfo, config).then((res) => res.data)
      const { data } = await createPaymentMutation({
        variables: { input: paymentInfo }
      })
      const createPayment = data.createPayment;
      if (createPayment) {

        // const orderUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/order/${orderId}`
        const orderUpdate = {
          payment: createPayment.id,
        }

        await updateOrderMutation({
          variables: { input: orderUpdate, updateOrderId: orderId }
        })
        setIsPaid(true)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        style={{ layout: 'vertical' }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: 'USD',
                  value: totalCost,
                },
              },
            ],
            application_context: {
              shipping_preference: 'NO_SHIPPING',
            },
          })
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => handleSubmitPayment(details))
        }}
        onError={(err) => {
          console.log(err)
        }}
      />
    </PayPalScriptProvider>
  )
}

export default PaymentSection
