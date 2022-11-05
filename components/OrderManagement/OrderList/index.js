import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { LIMIT_PRODUCT_ORDER_LIST, ORDER_STATUS } from 'utils/constant'
import { formatVNprice } from 'utils/function'
import styles from './styles'

export const DeliveryIcon = ({ width, height, fill, stroke }) => (
  <svg stroke={stroke} fill={fill} viewBox="0 0 24 24" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
    <g id="Delivery_Truck">
      <g>
        <path d="M21.47,11.185l-1.03-1.43a2.5,2.5,0,0,0-2.03-1.05H14.03V6.565a2.5,2.5,0,0,0-2.5-2.5H4.56a2.507,2.507,0,0,0-2.5,2.5v9.94a1.5,1.5,0,0,0,1.5,1.5H4.78a2.242,2.242,0,0,0,4.44,0h5.56a2.242,2.242,0,0,0,4.44,0h1.22a1.5,1.5,0,0,0,1.5-1.5v-3.87A2.508,2.508,0,0,0,21.47,11.185ZM7,18.935a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,7,18.935Zm6.03-1.93H9.15a2.257,2.257,0,0,0-4.3,0H3.56a.5.5,0,0,1-.5-.5V6.565a1.5,1.5,0,0,1,1.5-1.5h6.97a1.5,1.5,0,0,1,1.5,1.5ZM17,18.935a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,17,18.935Zm3.94-2.43a.5.5,0,0,1-.5.5H19.15a2.257,2.257,0,0,0-4.3,0h-.82v-7.3h4.38a1.516,1.516,0,0,1,1.22.63l1.03,1.43a1.527,1.527,0,0,1,.28.87Z"></path>
        <path d="M18.029,12.205h-2a.5.5,0,0,1,0-1h2a.5.5,0,0,1,0,1Z"></path>
      </g>
    </g>
  </svg>
)

const OrderList = ({ orderList }) => {
  const currentStatus = -1
  const [searchText, setSearchText] = useState('')

  if (orderList.length === 0)
    return (
      <div>
        <p>You do not have any orders.</p>
        <Link href="/products">
          <a>Click here to buy our products!</a>
        </Link>
      </div>
    )

  return (
    <div className="wrapper">
      <div className="nav-container">
        {Object.entries(ORDER_STATUS).map(([key, value]) => {
          return (
            <div className={`status-container ${value === currentStatus ? 'active' : ''}`} key={key}>
              <p className="status">{key}</p>
            </div>
          )
        })}
      </div>
      <div className="search-container">
        <div className="search-icon">
          <Image src="/search-icon.svg" width={16} height={16} alt="search icon" />
        </div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by OrderID"
        />
        <div className="search-button">Search</div>
      </div>
      <div className="order-container">
        {orderList.map((order) => {
          const color = '#72b8ac'
          let totalCost = 0

          return (
            <div className="card" key={order.id}>
              <div className="top">
                <div className="status">
                  <DeliveryIcon width={20} height={20} stroke="white" fill={color} />
                  <p style={{ color: color }}>Delivery success</p>
                  <div className="column-divider"></div>
                  <p style={{ color: '#DD583B' }}>DELIVERED</p>
                </div>
                <div className="divider"></div>
                <div className="product-container">
                  {order.products.map((product, idx) => {
                    totalCost += product.price * product.quantity
                    if (idx + 1 > LIMIT_PRODUCT_ORDER_LIST) return <div key={idx}></div>
                    return (
                      <div key={product.id} className="product">
                        <div className="info-container">
                          <div className="image">
                            <Image
                              src={product.images.length ? product.images[0].storageUrl : '/images/no-image.png'}
                              width={104}
                              height={104}
                            />
                          </div>
                          <div className="info">
                            <p>{product.name}</p>
                            <p>x{product.quantity}</p>
                          </div>
                        </div>
                        <div className="cost">
                          <p>{formatVNprice(product.price)}VNĐ</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="divider"></div>
              <div className="bottom">
                <div className="total-cost">
                  <p style={{ fontWeight: 700, fontSize: 16 }}>
                    Total: <span style={{ color: '#dd583b' }}>{formatVNprice(totalCost + order.delivery.fee)}VNĐ</span>
                  </p>
                </div>
                <Link href={`/order-management/${order.id}`}>
                  <a>View detail</a>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default OrderList
