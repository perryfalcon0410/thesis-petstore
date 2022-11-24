import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import axios from 'axios'
import styles from './styles'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { resetCheckout } from 'store/reducers/checkoutSlice'
import { addMilliseconds } from 'date-fns'

const BillingForm = ({ cartList, totalCost, customerBillingDetail }) => {
  const GHN_ShopId = '3410708'
  const GHN_Token = '5e301d1a-5c48-11ed-8636-7617f3863de9'
  const router = useRouter()
  const dispatch = useDispatch()
  const userSlice = useSelector((state) => state.user)
  const [completeOrder, setCompleteOrder] = useState('')
  const [listRegion, setListRegion] = useState([])
  const [listDistrict, setListDistrict] = useState([])
  const [listWard, setListWard] = useState([])

  useEffect(() => {
    if (completeOrder) localStorage.setItem('completeOrder', JSON.stringify(completeOrder))
    return () => {
      setCompleteOrder('')
    }
  }, [completeOrder])

  useEffect(() => {
    const fetchRegion = async () => {
      const url = 'https://online-gateway.ghn.vn/shiip/public-api/master-data/province'
      const config = {
        headers: {
          Token: GHN_Token,
        },
      }
      const regions = await axios.get(url, config).then((res) => res.data)
      setListRegion(regions.data)
    }
    fetchRegion()
    return () => {}
  }, [])

  const handleSelectRegion = async (regionId) => {
    const url = 'https://online-gateway.ghn.vn/shiip/public-api/master-data/district'
    const body = {
      province_id: regionId,
    }
    const config = {
      headers: {
        Token: GHN_Token,
      },
    }
    const districts = await axios.post(url, body, config).then((res) => res.data)
    setListDistrict(districts.data)
  }

  const handleSelectDistrict = async (districtId) => {
    const url = 'https://online-gateway.ghn.vn/shiip/public-api/master-data/ward'
    const body = {
      district_id: districtId,
    }
    const config = {
      headers: {
        Token: GHN_Token,
      },
    }
    const wards = await axios.post(url, body, config).then((res) => res.data)
    setListWard(wards.data)
  }

  const BILLING_SCHEMA = Yup.object({
    firstName: Yup.string().required('It is a required field.'),
    lastName: Yup.string().required('It is a required field.'),
    phone: Yup.string().required('It is a required field.'),
    email: Yup.string().required('It is a required field.'),
    company: Yup.string(),
    regionId: Yup.number().required('It is a required field.'),
    districtId: Yup.number().required('It is a required field'),
    wardId: Yup.string().required('It is a required field'),
    address: Yup.string().required('It is a required field'),
    orderComment: Yup.string(),
    paymentMethod: Yup.string().required(),
  })

  const getDeliveryServicePack = async (from_district_id, to_district_id) => {
    const url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/available-services'
    const body = {
      shop_id: Number(GHN_ShopId),
      from_district: Number(from_district_id),
      to_district: Number(to_district_id),
    }
    const config = {
      headers: {
        Token: GHN_Token,
      },
    }
    const servicePacks = await axios.post(url, body, config).then((res) => res.data)
    return servicePacks.data[0]
  }

  const calDeliveryFee = async (from_district_id, to_district_id, to_ward_code, servicePack) => {
    const url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee'
    const body = {
      from_district_id,
      to_district_id,
      to_ward_code,
      service_id: servicePack.service_id,
      service_type_id: servicePack.service_type_id,
      height: 50,
      length: 50,
      weight: 500,
      width: 50,
      insurance_value: 0,
      coupon: null,
    }
    const config = {
      headers: {
        Token: GHN_Token,
        ShopId: GHN_ShopId,
      },
    }
    const deliveryFee = await axios.post(url, body, config).then((res) => res.data)
    return deliveryFee.data
  }

  const calShippingTime = async (from_district_id, from_ward_code, to_district_id, to_ward_code, servicePack) => {
    const url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/leadtime'
    const body = {
      from_district_id,
      from_ward_code,
      to_district_id,
      to_ward_code,
      service_id: servicePack.service_id,
    }
    const config = {
      headers: {
        Token: GHN_Token,
        ShopId: GHN_ShopId,
      },
    }
    const shippingTime = await axios.post(url, body, config).then((res) => res.data)
    return shippingTime.data
  }

  const getShipInfo = async (from_district_id, from_ward_code, to_district_id, to_ward_code) => {
    const servicePack = await getDeliveryServicePack(from_district_id, to_district_id)
    const { leadtime } = await calShippingTime(
      from_district_id,
      from_ward_code,
      to_district_id,
      to_ward_code,
      servicePack,
    )
    const { total } = await calDeliveryFee(from_district_id, to_district_id, to_ward_code, servicePack)
    return {
      shippingFee: Number((total / 24815).toFixed(2)),
      shippingTime: addMilliseconds(new Date().getTime(), new Date(leadtime).getTime()),
    }
  }

  return (
    <div>
      <Formik
        validationSchema={BILLING_SCHEMA}
        initialValues={customerBillingDetail}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const from_district_id = 1455
            const from_ward_id = '21410'
            const region = listRegion.filter((region) => region.ProvinceID === values.regionId)[0].ProvinceName
            const district = listDistrict.filter((district) => district.DistrictID === values.districtId)[0]
              .DistrictName
            const ward = listWard.filter((ward) => ward.WardCode === values.wardId)[0].WardName
            // ** Get GHN delivery info
            const shipInfo = await getShipInfo(from_district_id, from_ward_id, values.districtId, values.wardId)

            // ** Create order through API
            const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/order`
            const checkoutData = {
              cart: cartList,
              bill: { ...values, district, region, ward },
              shippingTime: shipInfo.shippingTime,
              shippingFee: shipInfo.shippingFee,
              totalPrice: Number((totalCost + shipInfo.shippingFee).toFixed(2)),
            }
            const config = {
              headers: {
                Authorization: `Bearer ${userSlice.token}`,
              },
            }
            const createOrderData = await axios.post(url, checkoutData, config).then((res) => res.data)
            // ** Update order state to local storage
            setCompleteOrder({
              orderId: createOrderData.orderId,
              cart: cartList,
              bill: values,
              shipping: shipInfo,
              totalPrice: Number((totalCost + shipInfo.shippingFee).toFixed(2)),
            })
            // ** Reset checkout:
            dispatch(resetCheckout())
            router.push('/checkout/order-complete')
          } catch (e) {
            console.log(e)
          }
          setSubmitting(false)
          resetForm()
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
                      <h3 style={{ marginBottom: '10px' }}>Billing Information</h3>
                      <div className="woocommerce-billing-fields__field-wrapper">
                        <p className={'form-row form-row-first validate-required'}>
                          <label htmlFor={'firstName'}>
                            {'First name'}{' '}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type={'text'}
                              name={'firstName'}
                              className="input-text"
                              autoComplete={'given-name'}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.firstName}
                              placeholder={'Enter first name'}
                            />
                          </span>
                        </p>
                        <p className={'form-row form-row-last validate-required'}>
                          <label htmlFor={'lastName'}>
                            {'Last name'}{' '}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type={'text'}
                              name={'lastName'}
                              className="input-text"
                              autoComplete={'family-name'}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.lastName}
                              placeholder={'Enter last name'}
                            />
                          </span>
                        </p>
                        {touched.firstName && errors.firstName ? (
                          <p className="error-message">{errors.firstName}</p>
                        ) : null}
                        {touched.lastName && errors.lastName ? (
                          <p className="error-message">{errors.lastName}</p>
                        ) : null}
                        <p className={'form-row form-row-wide validate-required validate-phone'}>
                          <label htmlFor={'phone'}>
                            {'Phone number'}{' '}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type={'tel'}
                              name={'phone'}
                              className="input-text"
                              autoComplete={'tel'}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phone}
                              placeholder={'Enter phone number'}
                            />
                          </span>
                        </p>
                        {touched.phone && errors.phone ? <p className="error-message">{errors.phone}</p> : null}
                        <p className={'form-row form-row-wide validate-required validate-email'}>
                          <label htmlFor={'email'}>
                            {'Email'}{' '}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type={'email'}
                              name={'email'}
                              className="input-text"
                              autoComplete={'email'}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              placeholder={'Enter email'}
                            />
                          </span>
                        </p>
                        {touched.email && errors.email ? <p className="error-message">{errors.email}</p> : null}
                        <p className={'form-row form-row-wide'}>
                          <label htmlFor={'company'}>
                            {'Company'} <span className="optional">(optional)</span>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type={'text'}
                              name={'company'}
                              className="input-text"
                              autoComplete={'organization'}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.company}
                              placeholder={'Enter company'}
                            />
                          </span>
                        </p>
                        <p className="form-row form-row-wide address-field update_totals_on_change validate-required">
                          <label htmlFor="regionId">
                            {'Province/City'}
                            <abbr className="required" title="bắt buộc">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <select
                              name="regionId"
                              className="country_to_state country_select"
                              data-placeholder="Choose Province/City…"
                              aria-hidden="true"
                              tabIndex="-1"
                              value={values.regionId}
                              onChange={(e) => {
                                const regionId = Number(e.target.value)
                                setFieldValue('regionId', regionId)
                                handleSelectRegion(regionId, setFieldValue)
                              }}
                              onBlur={handleBlur}
                            >
                              {listRegion.map((region, index) => {
                                return (
                                  <option value={region.ProvinceID} key={index}>
                                    {region.ProvinceName}
                                  </option>
                                )
                              })}
                            </select>
                          </span>
                        </p>
                        <p className="form-row form-row-wide address-field update_totals_on_change validate-required">
                          <label htmlFor="districtId">
                            {'District'}
                            <abbr className="required" title="bắt buộc">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <select
                              name="districtId"
                              className="country_to_state country_select"
                              data-placeholder="Choose District…"
                              aria-hidden="true"
                              tabIndex="-1"
                              value={values.districtId}
                              onChange={(e) => {
                                const districtId = Number(e.target.value)
                                setFieldValue('districtId', districtId)
                                handleSelectDistrict(districtId, setFieldValue)
                              }}
                              onBlur={handleBlur}
                            >
                              {listDistrict.map((district, index) => {
                                return (
                                  <option value={district.DistrictID} key={index}>
                                    {district.DistrictName}
                                  </option>
                                )
                              })}
                            </select>
                          </span>
                        </p>
                        <p className="form-row form-row-wide address-field update_totals_on_change validate-required">
                          <label htmlFor="wardId">
                            {'Ward'}
                            <abbr className="required" title="bắt buộc">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <select
                              name="wardId"
                              className="country_to_state country_select"
                              data-placeholder="Choose District…"
                              aria-hidden="true"
                              tabIndex="-1"
                              value={values.wardId}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              {listWard.map((ward, index) => {
                                return (
                                  <option value={ward.WardCode} key={index}>
                                    {ward.WardName}
                                  </option>
                                )
                              })}
                            </select>
                          </span>
                        </p>
                        <p className={'form-row form-row-wide validate-required validate-address'}>
                          <label htmlFor={'address'}>
                            {'Address'}{' '}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <textarea
                              type={'text'}
                              name={'address'}
                              className="input-text"
                              placeholder={'Enter address'}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.address}
                              autoComplete={'address-level4'}
                            />
                          </span>
                        </p>
                        {touched.address && errors.address ? <p className="error-message">{errors.address}</p> : null}
                      </div>
                    </div>
                  </div>
                  <div className="clear">
                    <div className="woocommerce-additional-fields">
                      <div className="woocommerce-additional-fields__field-wrapper">
                        <p className="form-row notes">
                          <label htmlFor="orderComment">
                            {'Comments'} <span className="optional">(optional)</span>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <textarea
                              name="orderComment"
                              className="input-text"
                              placeholder="
                              Enter order note"
                              rows="2"
                              cols="5"
                              value={values.orderComment}
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
                                    <bdi>{cart.price * cart.quantity}</bdi>
                                    <span className="woocommerce-Price-currencySymbol">$</span>
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
                                  {totalCost}
                                  <span className="woocommerce-Price-currencySymbol">$</span>
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
                                          <label className="shipping__list_label">
                                            <Image width={100} height={70} alt="GHN" src="/images/ghn.png" />
                                          </label>
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
                                    {totalCost}
                                    <span className="woocommerce-Price-currencySymbol">$</span>
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
                              name="paymentMethod"
                              value="paypal"
                              checked={values.paymentMethod === 'paypal'}
                              onChange={() => setFieldValue('paymentMethod', 'paypal', false)}
                            />
                            <label htmlFor="payment_method_bacs">PayPal</label>
                            {values.paymentMethod === 'paypal' ? (
                              <div className="payment_box payment_method_bacs">
                                <p>Make payments via PayPal. Orders will be shipped after payment has been made.</p>
                              </div>
                            ) : null}
                          </li>
                          <li className="wc_payment_method payment_method_cod">
                            <input
                              id="payment_method_cod"
                              type="radio"
                              className="input-radio"
                              name="paymentMethod"
                              value="cod"
                              checked={values.paymentMethod === 'cod'}
                              onChange={() => setFieldValue('paymentMethod', 'cod', false)}
                            />
                            <label htmlFor="payment_method_cod">Cash on delivery</label>
                            {values.paymentMethod === 'cod' ? (
                              <div className="payment_box payment_method_cod">
                                <p>Pay the deliverer or shipper using cash or card.</p>
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
                            style={{ cursor: !isSubmitting ? 'pointer' : 'default', borderRadius: '5px' }}
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
