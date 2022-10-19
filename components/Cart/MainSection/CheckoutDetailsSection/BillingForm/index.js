import styles from './styles'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { LIST_REGION } from 'utils/constant'
import { useDispatch } from 'react-redux'
import { updateBillingInfo } from 'store/reducers/checkoutSlice'
import { consoleLog, formatVNprice } from 'utils/function'

const BillingForm = ({ cartList, setStepIdx, totalCost, customerBillingDetail }) => {
  const dispatch = useDispatch()

  const BILLING_SCHEMA = Yup.object({
    billing_first_name: Yup.string().required('It is a required field.'),
    billing_last_name: Yup.string().required('It is a required field.'),
    billing_company: Yup.string(),
    billing_country: Yup.string().required('It is a required field.'),
    billing_address_1: Yup.string().required('It is a required field.'),
    billing_postcode: Yup.string(),
    billing_city: Yup.string().required('It is a required field.'),
    billing_phone: Yup.string().required('It is a required field.'),
    billing_email: Yup.string().required('It is a required field.'),
    showAccount: Yup.boolean(),
    account_username: Yup.string().when('showAccount', {
      is: true,
      then: Yup.string().required('It is a required field.'),
      otherwise: Yup.string(),
    }),
    account_password: Yup.string().when('showAccount', {
      is: true,
      then: Yup.string().required('It is a required field.'),
      otherwise: Yup.string(),
    }),
    order_comments: Yup.string(),
    payment_method: Yup.string().required(),
  })

  return (
    <div>
      <Formik
        validationSchema={BILLING_SCHEMA}
        initialValues={{
          ...customerBillingDetail,
          showAccount: false,
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            dispatch(updateBillingInfo(values))
            const checkoutData = { cart: cartList, billingInfo: values }
            consoleLog(checkoutData)
            setSubmitting(false)
            resetForm()
            setStepIdx(2)
          } catch (e) {
            consoleLog(e)
          }
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
          <form
            name="checkout"
            className="checkout woocommerce-checkout"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <div className="row pt-0">
              <div className="large-7 col">
                <div id="customer_details">
                  <div className="clear">
                    <div className="woocommerce-billing-fields">
                      <h3>Billing Information</h3>
                      <div className="woocommerce-billing-fields__field-wrapper">
                        <p className={'form-row form-row-first validate-required'}>
                          <label htmlFor={'billing_first_name'}>
                            {'First name'}{' '}
                            <abbr className="required" title="bắt buộc">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type={'text'}
                              name={'billing_first_name'}
                              className="input-text"
                              autoComplete={'given-name'}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.billing_first_name}
                            />
                          </span>
                        </p>
                        <p className={'form-row form-row-last validate-required'}>
                          <label htmlFor={'billing_last_name'}>
                            {'Last name'}{' '}
                            <abbr className="required" title="bắt buộc">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type={'text'}
                              name={'billing_last_name'}
                              className="input-text"
                              autoComplete={'family-name'}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.billing_last_name}
                            />
                          </span>
                        </p>
                        {touched.billing_first_name && errors.billing_first_name ? (
                          <p className="error-message">{errors.billing_first_name}</p>
                        ) : null}
                        {touched.billing_last_name && errors.billing_last_name ? (
                          <p className="error-message">{errors.billing_last_name}</p>
                        ) : null}
                        <p className={'form-row form-row-wide'}>
                          <label htmlFor={'billing_company'}>{'Company name'}</label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type={'text'}
                              name={'billing_company'}
                              className="input-text"
                              autoComplete={'organization'}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.billing_company}
                            />
                          </span>
                        </p>
                        <p className="form-row form-row-wide address-field update_totals_on_change validate-required">
                          <label htmlFor="billing_country">
                            {'Country/Region'}{' '}
                            <abbr className="required" title="bắt buộc">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <select
                              name="billing_country"
                              className="country_to_state country_select"
                              autoComplete="country"
                              data-placeholder="Choose Country/Region"
                              aria-hidden="true"
                              tabIndex="-1"
                              value={values.billing_country}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              {LIST_REGION.map((region, index) => {
                                return (
                                  <option value={region.key} key={index}>
                                    {region.value}
                                  </option>
                                )
                              })}
                            </select>
                          </span>
                        </p>
                        <p className={'form-row address-field validate-required form-row-first'}>
                          <label htmlFor={'billing_address_1'}>
                            {'Address'}{' '}
                            <abbr className="required" title="bắt buộc">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type={'text'}
                              name={'billing_address_1'}
                              className="input-text"
                              autoComplete={'address-line1'}
                              placeholder={'Address'}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.billing_address_1}
                            />
                          </span>
                        </p>
                        {touched.billing_address_1 && errors.billing_address_1 ? (
                          <p className="error-message">{errors.billing_address_1}</p>
                        ) : null}
                        <p className={'form-row address-field validate-postcode form-row-wide'}>
                          <label htmlFor={'billing_postcode'}>
                            {'Postcode'}
                            <span className="optional">(optional)</span>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type={'text'}
                              name={'billing_postcode'}
                              className="input-text"
                              autoComplete={'postal-code'}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.billing_postcode}
                            />
                          </span>
                        </p>
                        <p className={'form-row address-field validate-required form-row-wide'}>
                          <label htmlFor={'billing_city'}>
                            {'Province/City'}{' '}
                            <abbr className="required" title="bắt buộc">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type={'text'}
                              name={'billing_city'}
                              className="input-text"
                              autoComplete={'address-level2'}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.billing_city}
                            />
                          </span>
                        </p>
                        {touched.billing_city && errors.billing_city ? (
                          <p className="error-message">{errors.billing_city}</p>
                        ) : null}
                        <p className={'form-row form-row-wide validate-required validate-phone'}>
                          <label htmlFor={'billing_phone'}>
                            {'Phone'}{' '}
                            <abbr className="required" title="bắt buộc">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type={'tel'}
                              name={'billing_phone'}
                              className="input-text"
                              autoComplete={'tel'}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.billing_phone}
                            />
                          </span>
                        </p>
                        {touched.billing_phone && errors.billing_phone ? (
                          <p className="error-message">{errors.billing_phone}</p>
                        ) : null}
                        <p className={'form-row form-row-wide validate-required validate-email'}>
                          <label htmlFor={'billing_email'}>
                            {'Email'}{' '}
                            <abbr className="required" title="bắt buộc">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type={'email'}
                              name={'billing_email'}
                              className="input-text"
                              autoComplete={'email'}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.billing_email}
                            />
                          </span>
                        </p>
                        {touched.billing_email && errors.billing_email ? (
                          <p className="error-message">{errors.billing_email}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="woocommerce-account-fields">
                      <p className="form-row form-row-wide create-account woocommerce-validated">
                        <label className="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox">
                          <input
                            className="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox"
                            type="checkbox"
                            name="createaccount"
                            value="1"
                            checked={values.showAccount}
                            onChange={() => {
                              setFieldValue('showAccount', !values.showAccount, false)
                            }}
                          />
                          <span>Create a new account ?</span>
                        </label>
                      </p>
                      {values.showAccount ? (
                        <div className="create-account">
                          <p className="form-row validate-required">
                            <label htmlFor="account_username">
                              {'Username'}
                              <abbr className="required" title="bắt buộc">
                                *
                              </abbr>
                            </label>
                            <span className="woocommerce-input-wrapper">
                              <input
                                type="text"
                                className="input-text"
                                name="account_username"
                                placeholder="Username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.account_username}
                              />
                            </span>
                          </p>
                          <p className="form-row validate-required woocommerce-invalid woocommerce-invalid-required-field">
                            <label htmlFor="account_password">
                              {'Password'}
                              <abbr className="required" title="bắt buộc">
                                *
                              </abbr>
                            </label>
                            <span className="woocommerce-input-wrapper password-input">
                              <input
                                type="password"
                                className="input-text"
                                name="account_password"
                                placeholder="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.account_password}
                              />
                              <span className="show-password-input" />
                            </span>
                          </p>
                          <div className="clear" />
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="clear">
                    <div className="woocommerce-additional-fields">
                      <div className="woocommerce-additional-fields__field-wrapper">
                        <p className="form-row notes">
                          <label htmlFor="order_comments">
                            {'Comments'} <span className="optional">(optional)</span>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <textarea
                              name="order_comments"
                              className="input-text"
                              placeholder="
                              Order notes, for example, more detailed delivery times or locations."
                              rows="2"
                              cols="5"
                              value={values.order_comments}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="large-5 col">
                <div className="col-inner has-border">
                  <div className="checkout-sidebar sm-touch-scroll">
                    <h3 id="order_review_heading">Your order</h3>
                    <div id="order_review" className="woocommerce-checkout-review-order">
                      <table
                        className="shop_table woocommerce-checkout-review-order-table"
                        style={{
                          position: 'static',
                          zoom: 1,
                        }}
                      >
                        <thead>
                          <tr>
                            <th className="product-name">Product</th>
                            <th className="product-total">Temporary price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartList.map((cart) => {
                            return (
                              <tr className="cart-item" key={cart.id}>
                                <td className="product-name">
                                  {cart.name}
                                  <strong className="product-quantity">{` x ${cart.quantity}`}</strong>
                                </td>
                                <td className="product-total">
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi>{formatVNprice(cart.price * cart.quantity)}</bdi>
                                    <span className="woocommerce-Price-currencySymbol">₫</span>
                                  </span>
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                        <tfoot>
                          <tr className="cart-subtotal">
                            <th>Temporary price</th>
                            <td>
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  {formatVNprice(totalCost)}
                                  <span className="woocommerce-Price-currencySymbol">₫</span>
                                </bdi>
                              </span>
                            </td>
                          </tr>
                          <tr className="woocommerce-shipping-totals shipping">
                            <td className="shipping__inner" colSpan="2">
                              <table className="shipping__table ">
                                <tbody>
                                  <tr>
                                    <th>Delivery</th>
                                    <td data-title="Giao hàng">
                                      <ul className="shipping__list woocommerce-shipping-methods">
                                        <li className="shipping__list_item">
                                          <label className="shipping__list_label">Free Delivery</label>
                                        </li>
                                      </ul>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr className="order-total">
                            <th>Total</th>
                            <td>
                              <strong>
                                <span className="woocommerce-Price-amount amount">
                                  <bdi>
                                    {formatVNprice(totalCost)}
                                    <span className="woocommerce-Price-currencySymbol">₫</span>
                                  </bdi>
                                </span>
                              </strong>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                      <div id="payment" className="woocommerce-checkout-payment">
                        <ul className="wc_payment_methods payment_methods methods">
                          <li className="wc_payment_method payment_method_bacs">
                            <input
                              id="payment_method_bacs"
                              type="radio"
                              className="input-radio"
                              name="payment_method"
                              value="bacs"
                              checked={values.payment_method === 'bacs'}
                              onChange={() => {
                                setFieldValue('payment_method', 'bacs', false)
                              }}
                            />
                            <label htmlFor="payment_method_bacs">Banking</label>
                            {values.payment_method === 'bacs' ? (
                              <div className="payment_box payment_method_bacs">
                                <p>
                                  Make payments to our bank account instantly. Please use your Order ID in the Billing
                                  Contents section. Orders will be shipped after payment has been made.
                                </p>
                              </div>
                            ) : null}
                          </li>
                          <li className="wc_payment_method payment_method_cod">
                            <input
                              id="payment_method_cod"
                              type="radio"
                              className="input-radio"
                              name="payment_method"
                              value="cod"
                              checked={values.payment_method === 'cod'}
                              onChange={() => {
                                setFieldValue('payment_method', 'cod', false)
                              }}
                            />
                            <label htmlFor="payment_method_cod">Cash on delivery</label>
                            {values.payment_method === 'cod' ? (
                              <div className="payment_box payment_method_cod">
                                <p>Cash on delivery</p>
                              </div>
                            ) : null}
                          </li>
                        </ul>
                        <div className="form-row place-order">
                          <div className="woocommerce-terms-and-conditions-wrapper" />
                          <button
                            type="submit"
                            className="button alt"
                            name="woocommerce_checkout_place_order"
                            disabled={isSubmitting}
                            style={{ cursor: !isSubmitting ? 'pointer' : 'default' }}
                            onClick={() => consoleLog('click')}
                          >
                            <div className={`layer-mask ${!isSubmitting ? 'hidden' : null}`}></div>
                            <span className={`material-icons loop ${!isSubmitting ? 'hidden' : null}`}>loop</span>
                            Book
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
      <style jsx>{styles}</style>
    </div>
  )
}

export default BillingForm
