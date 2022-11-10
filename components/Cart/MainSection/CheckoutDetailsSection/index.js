import { useState } from 'react'
import styles from './styles'
import Link from 'next/link'
import SignInForm from './SignInForm'
import BillingForm from './BillingForm'

const CheckoutDetailsSection = ({ setStepIdx, cartList, totalCost, customerBillingDetail }) => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="cart-container container page-wrapper page-checkout">
      <div className="woocommerce">
        <div className="woocommerce-notices-wrapper" />
        <div className="woocommerce-form-login-toggle">
          <div className="woocommerce-info message-wrapper">
            <div className="message-container container medium-text-center">
              {'Do you already have an account?'}
              <div onClick={() => setShowLogin(!showLogin)}>
                <Link href="#">
                  <a className="showlogin">{'Click here to login'}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {showLogin ? <SignInForm /> : null}
        <div className="woocommerce-notices-wrapper" />
        <BillingForm
          setStepIdx={setStepIdx}
          cartList={cartList}
          totalCost={totalCost}
          customerBillingDetail={customerBillingDetail}
        />
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default CheckoutDetailsSection

