import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { useSelector } from 'react-redux'
import axios from 'axios'

const PaymentSection = ({ totalCost, orderId, setIsPaid }) => {
  const userSlice = useSelector((state) => state.user)

  const initialOptions = {
    'client-id': 'Af7FSeQMWm_VZujM5kJj6pfZoUI1yDrWrdHph_6CLwDphhUeOLzIGfZA5EfdksRrDZm7BC15Q-sWYBhL',
    currency: 'USD',
    'disable-funding': 'card',
  }

  const handleSubmitPayment = async (details) => {
    try {
      const paymentUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/payment`
      const paymentInfo = {
        externalId: details.id,
        payerFistName: details.payer.name.given_name,
        payerLastName: details.payer.name.surname,
        currencyCode: details.purchase_units[0].amount.currency_code,
        totalAmount: details.purchase_units[0].amount.value,
        type: 'paypal',
      }
      const config = {
        headers: {
          Authorization: `Bearer ${userSlice.token}`,
        },
      }
      const createPayment = await axios.post(paymentUrl, paymentInfo, config).then((res) => res.data)
      if (createPayment) {
        const orderUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/order/${orderId}`
        const orderUpdate = {
          payment: createPayment.paymentId,
        }
        await axios.patch(orderUrl, orderUpdate, config).then((res) => res.data)
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
