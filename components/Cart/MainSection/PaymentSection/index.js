import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { consoleLog } from 'utils/function'

const PaymentSection = ({ submitForm, disabled, totalCost }) => {
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
                description: 'Order payment',
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
            consoleLog(details, 'Payment: ')
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
