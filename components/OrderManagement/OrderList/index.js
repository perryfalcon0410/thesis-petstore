import Image from 'next/image'
import Link from 'next/link'
import { LIMIT_PRODUCT_ORDER_LIST, ORDER_STATUS } from 'utils/constant'
import styles from './styles'
import { DeliveryIcon } from 'components/Utils/Icon'
import { useState } from 'react'

const OrderList = ({ orderList }) => {
  const [currentStatus, setCurrentStatus] = useState(ORDER_STATUS.ALL);
  const statusColor = {
    PENDING: '#FFB020',
    CONFIRMED: '#2196F3',
    DELIVERING: '#10B981',
    FINISHED: '#14B8A6',
    CANCELLED: '#D14343',
    RETURNED: '#D14343',
  }
  const statusTitle = {
    PENDING: "Pending",
    CONFIRMED: "Confirmed",
    CANCELLED: "Cancelled",
    DELIVERING: "Delivering",
    FINISHED: "Finished",
    RETURNED: "Returned",
  }
  const filteredOrderList = currentStatus === ORDER_STATUS.ALL
    ? orderList
    : orderList.filter(order => order.status === Object.keys(ORDER_STATUS)[Object.values(ORDER_STATUS)
      .indexOf(currentStatus)]);
  if (orderList.length === 0)
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <p>You do not have any orders.</p>
          <Link href="/products">
            <a>Click here to buy our products!</a>
          </Link>
        </div>
      </>

    );


  return (
    <div className="wrapper">
      <div className="nav-container">
        {Object.entries(ORDER_STATUS).map(([key]) => {
          return (
            <div className={`status-container ${ORDER_STATUS[key] === currentStatus ? 'active' : ''}`} key={key} onClick={() => setCurrentStatus(ORDER_STATUS[key])}>
              <p className="status">{key}</p>
            </div>
          )
        })}
      </div>
      <div className="order-container">
        {filteredReservationList.length > 0 ? (
          filteredOrderList.map((order) => {
            return (
              <div className="card" key={order.id}>
                <div className="top">
                  <div className="status">
                    <DeliveryIcon width={20} height={20} stroke={statusColor[order.status]} fill={'white'} />
                    <p style={{ color: statusColor[order.status] }}>{statusTitle[order.status]}</p>
                    {/* <div className="column-divider"></div>
                  <p style={{ color: '#DD583B' }}>DELIVERED</p> */}
                  </div>
                  <div className="divider"></div>
                  <div className="product-container">
                    {order.cart.map((product, idx) => {
                      if (idx + 1 > LIMIT_PRODUCT_ORDER_LIST) return <div key={idx}></div>
                      return (
                        <div key={product.id} className="product">
                          <div className="info-container">
                            <div className="image">
                              <Image
                                src={product.images.length ? product.images[0].url : '/images/no-image.png'}
                                alt={product.images.length !== 0 ? product.images[0].image_name : 'product image'}
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
                            <p>${product.price * product.quantity}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="divider"></div>
                <div className="bottom">
                  <div className="shipping-fee">
                    <p style={{ fontWeight: 700, fontSize: 16 }}>
                      Shipping Fee: <span style={{ color: '#dd583b' }}>${order.shippingFee.toFixed(2)}</span>
                    </p>
                  </div>
                  <div className="total-cost">
                    <p style={{ fontWeight: 700, fontSize: 20 }}>
                      Total: <span style={{ color: '#dd583b' }}>${order.totalPrice.toFixed(2)}</span>
                    </p>
                  </div>
                  <Link href={`/order-management/${order._id}`}>
                    <a>View detail</a>
                  </Link>
                </div>
              </div>
            )
          })
        ) : (
          <p style={{ textAlign: "center" }}>There are no reservations in this category.</p>
        )}
      </div>
      <style jsx>{styles}</style>
    </div>
  );

}

export default OrderList
