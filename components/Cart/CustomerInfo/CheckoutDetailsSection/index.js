import styles from './styles'
import BillingForm from './BillingForm'

const CheckoutDetailsSection = ({ cartList, totalCost, customerBillingDetail }) => {
  return (
    <div className="cart-container container page-wrapper page-checkout">
      <div className="woocommerce">
        <div className="woocommerce-notices-wrapper" />
        <BillingForm cartList={cartList} totalCost={totalCost} customerBillingDetail={customerBillingDetail} />
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default CheckoutDetailsSection
