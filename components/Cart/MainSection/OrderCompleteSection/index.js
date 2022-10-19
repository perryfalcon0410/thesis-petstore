import Link from 'next/link'
import React from 'react'
import { consoleLog, formatVNprice } from 'utils/function'
import styles from './styles'

const OrderCompleteSection = ({ cartList, totalCost, SOnum }) => {
  consoleLog(cartList, 'cartList')

  const today = new Date()

  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-large-7">
          <h1>Order details</h1>
          <div className="row-header">
            <p className="title-cell">Product</p>
            <p className="title-cell">Total</p>
          </div>
          {cartList.map((cart) => {
            return (
              <div className="row-cell" key={cart.id}>
                <div className="product">
                  <Link href={`/products/${cart.id}`}>
                    <a>{cart.name}</a>
                  </Link>
                  &#215; {cart.quantity}
                </div>
                <p className="price">{formatVNprice(cart.price * cart.quantity)}₫</p>
              </div>
            )
          })}
          <div className="row-cell">
            <p className="sub-total">Subtotal</p>
            <p className="sub-price">{formatVNprice(totalCost)}₫</p>
          </div>
          <div className="row-cell">
            <p className="shipping">Shipping</p>
            <p className="method">Free delivery</p>
          </div>
          <div className="row-cell">
            <p className="payment-method">Payment methods</p>
            <p className="method">Banking</p>
          </div>
          <div className="row-cell">
            <p className="total">Total</p>
            <p className="price">{formatVNprice(totalCost)}₫</p>
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
                Date:{' '}
                <span className="date">
                  Month {today.getUTCMonth() + 1} Date {today.getUTCDate()}, {today.getUTCFullYear()}
                </span>
              </li>
              <li>
                Total: <span className="price">{formatVNprice(totalCost)}₫</span>
              </li>
              <li>
                Payment method: <span className="payment-method">Banking</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default OrderCompleteSection
