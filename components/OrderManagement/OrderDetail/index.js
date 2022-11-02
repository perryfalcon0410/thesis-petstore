import styles from './styles'
import Link from 'next/link'
import Image from 'next/image'
import { formatVNprice } from 'utils/function'
import { IMAGE_QUALITY } from 'utils/constant'

const OrderDetail = ({ orderDetail }) => {
  let totalCost = 0

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
              {orderDetail.products.map((product) => {
                totalCost += product.price * product.quantity
                return (
                  <tr key={product.id}>
                    <td style={{ minWidth: '60px', maxWidth: '90px', width: '90px' }} className="product-thumbnail">
                      <Image
                        src={product.images.length !== 0 ? product.images[0].storageUrl : '/images/no-image.png'}
                        alt={product.name}
                        width={IMAGE_QUALITY.LOW}
                        height={IMAGE_QUALITY.LOW}
                      />
                    </td>
                    <td className="product-name" colSpan={2}>
                      {product.name}
                    </td>
                    <td className="product-price">
                      <span>{formatVNprice(product.price)}₫</span>
                    </td>
                    <td className="product-quantity">
                      <div>
                        <p>{product.quantity}</p>
                      </div>
                    </td>
                    <td className="product-subtotal">
                      <span>{formatVNprice(product.price * product.quantity)}₫</span>
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
            <p className="price">{formatVNprice(totalCost)}₫</p>
          </div>
          <div className="inner-row">
            <p className="shipping">Delivery</p>
            <div>
              <p className="method">Free delivery</p>
              <p className="destination">Shipping options will be updated during checkout.</p>
            </div>
          </div>
          <div className="inner-row">
            <p className="total">Total</p>
            <p className="price">{formatVNprice(totalCost)}₫</p>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default OrderDetail
