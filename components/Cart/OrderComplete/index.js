import styles from './styles'
import NavBar from 'components/NavBar'
import OrderCompleteSection from './OrderCompleteSection'
import Footer from 'components/Utils/Footer'
import Link from 'next/link'

const Cart = ({ cartSlice }) => {
  const steps = ['Shopping Cart', 'Checkout Detail', 'Order Complete']
  const stepIdx = 2
  const cartInfo = Object.values(cartSlice.cart)
  const billInfo = cartSlice.bill
  const shipInfo = cartSlice.shipping
  const totalCost = cartSlice.totalPrice
  const orderId = cartSlice.orderId
  const SOnum = cartSlice.orderId
  return (
    <div className="cart-wrapper">
      <NavBar />
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
      {cartInfo.length === 0 ? (
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: 20, marginBottom: '50px' }}
        >
          <p style={{ fontSize: 22, color: '#777', textAlign: 'center', lineHeight: 1.5 }}>
            There are no products in the cart
          </p>
          <Link href="/products">
            <a className="back-button">Back to the store</a>
          </Link>
        </div>
      ) : (
        <OrderCompleteSection
          cartInfo={cartInfo}
          billInfo={billInfo}
          shipInfo={shipInfo}
          totalCost={totalCost}
          SOnum={SOnum}
          orderId={orderId}
        />
      )}
      <Footer />
      <style jsx>{styles}</style>
    </div>
  )
}

export default Cart
