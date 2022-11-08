import React from 'react'
import styles from './styles'
import CheckoutDetailsSection from './CheckoutDetailsSection'
import ShoppingCartSection from './ShoppingCartSection'
import OrderCompleteSection from './OrderCompleteSection'
import Link from 'next/link'

const MainSection = ({ stepIdx, cartSlice, setStepIdx }) => {
  const steps = ['Shopping Cart', 'Checkout Detail', 'Order Complete']
  const cartList = Object.values(cartSlice.cart)
  const customerBillingDetail = cartSlice.bill
  const totalCost = cartSlice.totalPrice
  const SOnum = 1

  return (
    <main>
      <div className="page-title">
        <div className="container">
          {steps.map((step, index) => {
            return (
              <div className="row" key={index}>
                <div className={`path ${stepIdx === index ? 'current' : null}`}>{step}</div>
                {index === steps.length - 1 ? null : (
                  <span className="material-icons-outlined arrow">arrow_forward_ios</span>
                )}
              </div>
            )
          })}
        </div>
      </div>
      {cartList.length === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: 20 }}>
          <p style={{ fontSize: 22, color: '#777', textAlign: 'center', lineHeight: 1.5 }}>
            There are no products in the cart
          </p>
          <Link href="/products">
            <a className="back-button">Back to the store</a>
          </Link>
        </div>
      ) : (
        <>
          {stepIdx === 0 && <ShoppingCartSection cartList={cartList} setStepIdx={setStepIdx} totalCost={totalCost} />}
          {stepIdx === 1 && (
            <CheckoutDetailsSection
              cartList={cartList}
              setStepIdx={setStepIdx}
              totalCost={totalCost}
              customerBillingDetail={customerBillingDetail}
            />
          )}
          {stepIdx === 2 && (
            <OrderCompleteSection cartList={cartList} setStepIdx={setStepIdx} totalCost={totalCost} SOnum={SOnum} />
          )}
        </>
      )}
      <style jsx>{styles}</style>
    </main>
  )
}

export default MainSection
