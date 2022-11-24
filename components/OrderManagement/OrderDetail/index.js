import styles from './styles'
import Link from 'next/link'
import Image from 'next/image'
import { IMAGE_QUALITY } from 'utils/constant'
import { format } from 'date-fns'

const OrderDetail = ({ orderDetail }) => {
  let totalCost = 0
  const statusTitle = {
    pending: 'Pending',
    confirm: 'Confirmed',
    delivering: 'Delivering',
    finish: 'Finished',
    cancel: 'Canceled',
  }
  const paymentMethod = {
    paypal: 'Paypal',
    cod: 'Cash on Delivery',
  }
  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-large-7">
          <table>
            <thead>
              <tr>
                <th colSpan={3} className="product-name">
                  Product
                </th>
                <th className="product-price">Price</th>
                <th className="product-quantity">Quantity</th>
                <th className="product-subtotal">Temporary price</th>
              </tr>
            </thead>
            <tbody>
              {orderDetail.cart.map((product) => {
                totalCost = Number((totalCost + product.price * product.quantity).toFixed(2))
                return (
                  <tr key={product.id}>
                    <td style={{ minWidth: '60px', maxWidth: '90px', width: '90px' }} className="product-thumbnail">
                      <Image
                        src={product.images.length !== 0 ? product.images[0].url : '/images/no-image.png'}
                        alt={product.images.length !== 0 ? product.images[0].image_name : 'product image'}
                        width={IMAGE_QUALITY.LOW}
                        height={IMAGE_QUALITY.LOW}
                      />
                    </td>
                    <td className="product-name" colSpan={2}>
                      {product.name}
                    </td>
                    <td className="product-price">
                      <span>{product.price}$</span>
                    </td>
                    <td className="product-quantity">
                      <div>
                        <p>{product.quantity}</p>
                      </div>
                    </td>
                    <td className="product-subtotal">
                      <span>{(product.price * product.quantity).toFixed(2)}$</span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <Link href="/order-management">
            <a className="product-path">
              <div className="go-back">
                <span className="material-icons back">west</span>
                <p>Go Back</p>
              </div>
            </a>
          </Link>
        </div>
        <div className="col-large-5">
          <div className="title">Order infomation</div>
          <div className="inner-row">
            <p className="subtotal">Temporary price</p>
            <p className="price">{totalCost}$</p>
          </div>
          <div className="inner-row">
            <p className="shipping">Delivery</p>
            <div>
              <p className="method">
                <span style={{ fontWeight: 700 }}>Cost: </span>
                {orderDetail.shippingFee === 0 ? 'Free' : `${orderDetail.shippingFee}$`}
              </p>
              <p className="destination">
                <span style={{ fontWeight: 700 }}>Status: </span> {statusTitle[orderDetail.status]}
              </p>
              <p className="destination">
                <span style={{ fontWeight: 700 }}>Expected Time: </span>{' '}
                {format(new Date(orderDetail.shippingTime), 'dd/MM/yyyy')}
              </p>
              <p className="destination">
                <span style={{ fontWeight: 700 }}>To: </span>{' '}
                {` ${orderDetail.bill.address}, ${orderDetail.bill.ward}, ${orderDetail.bill.district}, ${orderDetail.bill.region}`}
              </p>
            </div>
          </div>
          <div className="inner-row">
            <p className="shipping">Payment method</p>
            <div>
              <p className="method">{paymentMethod[orderDetail.bill.paymentMethod]}</p>
            </div>
          </div>
          <div className="inner-row">
            <p className="total">Total</p>
            <p className="price">{orderDetail.totalPrice}$</p>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default OrderDetail
