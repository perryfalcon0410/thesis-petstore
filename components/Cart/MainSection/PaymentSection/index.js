import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { consoleLog } from 'utils/function'

const PaymentSection = ({ submitForm, setPaymentInfo, disabled, totalCost }) => {
  const initialOptions = {
    'client-id': 'Af7FSeQMWm_VZujM5kJj6pfZoUI1yDrWrdHph_6CLwDphhUeOLzIGfZA5EfdksRrDZm7BC15Q-sWYBhL',
    currency: 'USD',
    'disable-funding': 'card',
  }

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        disabled={disabled}
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
          return actions.order.capture().then((details) => {
            setPaymentInfo({
              externalId: details.id,
              payerFistName: details.payer.name.given_name,
              payerLastName: details.payer.name.surname,
              currencyCode: details.purchase_units[0].amount.currency_code,
              totalAmount: details.purchase_units[0].amount.value,
              type: 'paypal',
            })
            submitForm()
          })
        }}
        onError={(err) => {
          console.log(err)
        }}
      />
    </PayPalScriptProvider>
  )
}

export default PaymentSection
