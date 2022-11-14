import Link from 'next/link'
import React from 'react'
import styles from './styles'
import PaymentSection from '../PaymentSection'

const OrderCompleteSection = ({ cartInfo, billInfo, shipInfo, totalCost, SOnum, orderId }) => {
  const orderingDate = new Date()
  const shippingDate = new Date(shipInfo.expectedDeliveryTime)
  const paymentMethodObj = {
    paypal: 'Paypal',
    cod: 'Cash on Delivery',
  }
  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-large-7">
          <h1>Order details</h1>
          <div className="row-header">
            <p className="title-cell">Product</p>
            <p className="title-cell">Total</p>
          </div>
          {cartInfo.map((cart) => {
            return (
              <div className="row-cell" key={cart.id}>
                <div className="product">
                  <Link href={`/products/${cart.id}`}>
                    <a>{cart.name}</a>
                  </Link>
                  {' x'} {cart.quantity}
                </div>
                <p className="price">{(cart.price * cart.quantity).toFixed(2)}$</p>
              </div>
            )
          })}
          <div className="row-cell">
            <p className="sub-total">Subtotal</p>
            <p className="sub-price">{(totalCost - shipInfo.totalFee).toFixed(2)}$</p>
          </div>
          <div className="row-cell">
            <p className="shipping">Shipping by</p>
            <p className="method">
              <img alt="GHN" width="100px" height="60px" src="/images/ghn.png" />
            </p>
          </div>
          <div className="row-cell">
            <p className="shipping-cost">Shipping cost</p>
            <p className="price">{shipInfo.totalFee}$</p>
          </div>
          <div className="row-cell">
            <p className="total">Total</p>
            <p className="price">{totalCost}$</p>
          </div>
        </div>
        <div className="col-large-5">
          <div className="card">
            <p className="thank-you">Thank you. Your order has been received</p>
            <ul>
              <li>
                Code orders: <span className="id">{SOnum}</span>
              </li>
              <li>
                Order date:{' '}
                <span className="date">
                  {orderingDate.getUTCDate()}/{orderingDate.getUTCMonth() + 1}/{orderingDate.getUTCFullYear()}
                </span>
              </li>
              <li>
                Expected delivery date:{' '}
                <span className="date">
                  {shippingDate.getUTCDate()}/{shippingDate.getUTCMonth() + 1}/{shippingDate.getUTCFullYear()}
                </span>
              </li>
              <li>
                Total: <span className="price">{totalCost}$</span>
              </li>
              <li>
                Payment method: <span className="payment-method">{paymentMethodObj[billInfo.paymentMethod]}</span>
              </li>
            </ul>
            {billInfo.paymentMethod === 'paypal' ? (
              <div className="payment">
                <p className="payment-title">Please click this button to pay</p>
                <PaymentSection totalCost={totalCost} orderId={orderId} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default OrderCompleteSection
