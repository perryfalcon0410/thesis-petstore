import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import React from 'react'
import { consoleLog, formatVNprice } from 'utils/function'
import styles from './styles'
import { useEffect } from 'react'
import PaymentSection from '../PaymentSection'

const OrderCompleteSection = ({ cartList, totalCost, SOnum }) => {
  const today = new Date()

  const router = useRouter()

  const handleCheckout = async () => {
    typeof window !== 'undefined'
    // setPaymentMethod(1);
    const response = await fetch('/api/stripe', {
      method: "POST",
      headers:{
        'Content-type': "application/json",

      },
      body: JSON.stringify(cartList),
    });
    if(response.status == 500) return;
    const data = await response.json();
    // toast.loading("Redirecting ..."); 
    router.push(data.url)
  }


  useEffect = () => {
    // if (document.getElementById('payment_method_bacs').checked == true){
    //   console.log("Hello")
    // }else{
    //   console.log("Bye bye")
    // }
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
          {cartList.map((cart) => {
            return (
              <div className="row-cell" key={cart.id}>
                <div className="product">
                  <Link href={`/products/${cart.id}`}>
                    <a>{cart.name}</a>
                  </Link>
                  &#215; {cart.quantity}
                </div>
                <p className="price">{formatVNprice(cart.price * cart.quantity)}$</p>
              </div>
            )
          })}
          <div className="row-cell">
            <p className="sub-total">Subtotal</p>
            <p className="sub-price">{formatVNprice(totalCost)}$</p>
          </div>
          <div className="row-cell">
            <p className="shipping">Shipping</p>
            <p className="method">
              <img width="50px" src='/images/ghn.png' />

            </p>
          </div>
          <div className="row-cell">
            <p className="payment-method">Payment methods</p>
            <p className="method">Banking</p>
          </div>
          <div className="row-cell">
            <p className="total">Total</p>
            <p className="price">{formatVNprice(totalCost)}$</p>
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
                Total: <span className="price">{formatVNprice(totalCost)}$</span>
              </li>
              <li>
                Payment method: <span className="payment-method">Banking</span>
              </li>
            </ul>
          </div>



          <div id="payment" className="woocommerce-checkout-payment">
            <ul style={{'list-style-type': 'none'}} className="wc_payment_methods payment_methods methods">
              <li className="wc_payment_method payment_method_bacs">
                <input
                  id="payment_method_bacs"
                  type="radio"
                  className="input-radio"
                  name="paymentMethod"
                  value="paypal"
                  // checked={values.paymentMethod === 'paypal'}
                  // checked={false}
                  // onChange={() => setFieldValue('paymentMethod', 'paypal', false)}
                />
                <label htmlFor="payment_method_bacs">PayPal</label>
                {/* {values.paymentMethod === 'paypal' ? ( */}
                  {/* <div className="payment_box payment_method_bacs" hidden>
                    <p>Make payments via PayPal. Orders will be shipped after payment has been made.</p>
                  </div> */}
                {/* ) : null} */}
              </li>
              <li className="wc_payment_method payment_method_cod">
                <input
                  id="payment_method_cod"
                  type="radio"
                  className="input-radio"
                  name="paymentMethod"
                  value="cod"
                  // checked={values.paymentMethod === 'cod'}
                  // checked = {false}
                  // onChange={() => setFieldValue('paymentMethod', 'cod', false)}
                />
                <label htmlFor="payment_method_cod">Cash on delivery</label>
                {/* {values.paymentMethod === 'cod' ? ( */}
                  {/* <div className="payment_box payment_method_cod">
                    <p>Pay the deliverer or shipper using cash or card.</p>
                  </div> */}
                {/* ) : null} */}
              </li>
            </ul>
            <div className="form-row place-order">
              <div className="woocommerce-terms-and-conditions-wrapper" />
              {/* {values.paymentMethod === 'paypal' ? ( */}
                <PaymentSection
                  // disabled={isSubmitting}
                  totalCost={totalCost}
                  // setPaymentInfo={setPaymentInfo}
                  // submitForm={submitForm}
                />
              {/* ) : ( */}
                <button
                  type="submit"
                  className="button alt"
                  name="woocommerce_checkout_place_order"
                  // disabled={isSubmitting}
                  // style={{ cursor: !isSubmitting ? 'pointer' : 'default', borderRadius: '5px' }}
                >
                  {/* <div className={`layer-mask ${!isSubmitting ? 'hidden' : null}`}></div> */}
                  {/* <span className={`material-icons loop ${!isSubmitting ? 'hidden' : null}`}>loop</span> */}
                  Book
                </button>
              {/* )} */}

            </div>
          </div>




          <button className='btn' onClick={handleCheckout}>Delivery</button>
          <Link className='view-delivery' href="/delivery">View Delivery</Link>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default OrderCompleteSection


export async function getServerSideProps(cartList) {
    
    // const res = await axios.post('https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee',
    // {
    //   "from_district_id":1454,
    //   "service_id":53320,
    //   "service_type_id":null,
    //   "to_district_id":1452,
    //   "to_ward_code":"21012",
    //   "height":50,
    //   "length":20,
    //   "weight":200,
    //   "width":20,
    //   "insurance_value":10000,
    //   "coupon": null
    // },
    // {
    //     headers: {
    //         'Token': '5afa38c1-5c4b-11ed-b8cc-a20ef301dcd7',
    //         'Content-Type': 'application/json'
    //     }
    // }).then((response)=>{
    //     return response.data;
    // });
  
    // if (!res) {
    //   return {
    //     notFound: true,
    //   }
    // }
  
    // return {
    //   props: { res }, // will be passed to the page component as props
    // }
}


