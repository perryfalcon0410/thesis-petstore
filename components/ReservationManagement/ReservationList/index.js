import Image from 'next/image'
import Link from 'next/link'
import { LIMIT_PRODUCT_ORDER_LIST, RESERVATION_STATUS } from 'utils/constant'
import styles from './styles'
import { DeliveryIcon } from 'components/Utils/Icon'
import { useState } from 'react'

const ReservationList = ({ reservationList }) => {
  console.log("list", reservationList)
  const [currentStatus, setCurrentStatus] = useState(RESERVATION_STATUS.ALL);
  const statusColor = {
    BOOKED: '#FFB020',
    SUCCESS: '#14B8A6',
    CANCELLED: '#D14343',
  }
  const statusTitle = {
    BOOKED: "Booked",
    CANCELLED: "Cancelled",
    SUCCESS: "Success",
  }
  const capiStr = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  const getPrice = (reservation) => {
    if (reservation.serviceType._id) {
      const price = reservation.serviceType.price.find((i) => {
        return Number(reservation.weight) >= i.minWeight && Number(reservation.weight) < i.maxWeight;
      });
      if (price) return price.priceNumber;
      else return 0;
    }
    return 0;
  }
  const filteredReservationList = currentStatus === RESERVATION_STATUS.ALL
    ? reservationList
    : reservationList.filter(reservation => reservation.status === Object.keys(RESERVATION_STATUS)[Object.values(RESERVATION_STATUS)
      .indexOf(currentStatus)]);
  if (reservationList.length === 0)
    return (
      <div>
        <p>You do not have any reservations.</p>
        <Link href="/services">
          <a>Click here to make reservation</a>
        </Link>
      </div>
    )

  return (
    <div className="wrapper">
      <div className="nav-container">
        {Object.entries(RESERVATION_STATUS).map(([key, value]) => {
          return (
            <div className={`status-container ${RESERVATION_STATUS[key] === currentStatus ? 'active' : ''}`} key={key} onClick={() => setCurrentStatus(RESERVATION_STATUS[key])}>
              <p className="status">{key}</p>
            </div>
          )
        })}
      </div>
      <div className="order-container">
        {filteredReservationList.map((reservation) => {
          return (
            <div className="card" key={reservation._id}>
              <div className="top">
                <div className="status">
                  <DeliveryIcon width={20} height={20} stroke={statusColor[reservation.status]} fill={'white'} />
                  <p style={{ color: statusColor[reservation.status] }}>{statusTitle[reservation.status]}</p>
                </div>
                <div className="divider"></div>
                <div className="product-container">
                  <div className='info-container'>
                    <p style={{ fontWeight: 'normal', fontSize: '1.2rem', marginBottom: 10 }}>
                      {`Pet: ${capiStr(reservation.species)}`}
                    </p>
                    <p style={{ fontWeight: 'normal', fontSize: '1.2rem', marginBottom: 10 }}>
                      {`Breed: ${capiStr(reservation.breed)}`}
                    </p>
                    <p style={{ fontWeight: 'normal', fontSize: '1.2rem', marginBottom: 10 }}>
                      {`Weight: ${reservation.weight}kg`}
                    </p>
                    <p style={{ fontWeight: 'normal', fontSize: '1.2rem', marginBottom: 10 }}>
                      {`Date: ${reservation.reservationDate.slice(0, 10)}`}
                    </p>
                    <p style={{ fontWeight: 'normal', fontSize: '1.2rem', marginBottom: 10 }}>
                      {`Time: ${reservation.reservationHour.name}`}
                    </p>
                    <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                      {`Service Type: ${reservation.serviceType.name} (${reservation.serviceType.timeServe})`}
                    </p>
                  </div>

                </div>
                <div className="divider"></div>
                <div className="bottom">
                  <div className='total-cost'>
                    <p style={{ fontWeight: 700, fontSize: 20 }}>
                      Total: <span style={{ color: '#dd583b' }}>${getPrice(reservation)}</span>
                    </p>
                  </div>
                  <Link href={`/reservation-management/${reservation._id}`}>
                    <a>View detail</a>
                  </Link>
                </div>
              </div>
            </div>

          )
        })}
      </div>
      <style jsx>{styles}</style>
    </div >
  )
}

export default ReservationList
