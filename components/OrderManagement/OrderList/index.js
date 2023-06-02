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
                  {/* ... */}
                </div>
                <div className="divider"></div>
                <div className="bottom">
                  {/* ... */}
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
