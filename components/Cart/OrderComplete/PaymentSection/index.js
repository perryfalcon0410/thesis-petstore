import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

const PaymentSection = ({ totalCost }) => {
  const initialOptions = {
    'client-id': 'Af7FSeQMWm_VZujM5kJj6pfZoUI1yDrWrdHph_6CLwDphhUeOLzIGfZA5EfdksRrDZm7BC15Q-sWYBhL',
    currency: 'USD',
    'disable-funding': 'card',
  }

  const handleSubmitPayment = (details) => {
    console.log({
      externalId: details.id,
      payerFistName: details.payer.name.given_name,
      payerLastName: details.payer.name.surname,
      currencyCode: details.purchase_units[0].amount.currency_code,
      totalAmount: details.purchase_units[0].amount.value,
      type: 'paypal',
    })
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
