import styles from './styles'
import Link from 'next/link'
import Image from 'next/image'
import { IMAGE_QUALITY } from 'utils/constant'
import { format } from 'date-fns'
import { productDetail } from 'components/mocks/productDetail'

const ReservationDetail = ({ reservationDetail }) => {
  const statusTitle = {
    BOOKED: "Booked",
    CANCELLED: "Cancelled",
    FINISHED: "Finished",
  }
  const capiStr = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  const getPrice = (reservation) => {

    const price = reservation.serviceType.price.find((i) => {
      return Number(reservation.weight) >= i.minWeight && Number(reservation.weight) < i.maxWeight;
    });
    if (price) return price.priceNumber;
    else return 0;
    return 0;
  }
  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-large-7">
          <table>
            <thead>
              <tr>
                <th colSpan={2} className="product-name">
                  Service Type
                </th>
                <th className="product-price">Pet Type</th>
                <th className="product-quantity">Weight</th>

              </tr>
            </thead>
            <tbody>
              <td className="product-price" colSpan={2}>
                <span>{reservationDetail.serviceType.name}</span>
              </td>
              <td className="product-price">
                <span>{capiStr(reservationDetail.species)}</span>
              </td>
              <td className="product-price">
                <span>{reservationDetail.weight}kg</span>
              </td>

            </tbody>
          </table>
          <Link href="/reservation-management">
            <a className="product-path">
              <div className="go-back">
                <span className="material-icons back">west</span>
                <p>Go Back</p>
              </div>
            </a>
          </Link>
        </div>
        <div className="col-large-5">
          <div className="title">Reservation infomation</div>
          <div className="inner-row">
            <p className="shipping"></p>
            <div>
              <p className="destination">
                <span style={{ fontWeight: 700 }}>Pet: </span> {`${capiStr(reservationDetail.species)} - ${capiStr(reservationDetail.breed)}`}
              </p>
              <p className="destination">
                <span style={{ fontWeight: 700 }}>Status: </span> {statusTitle[reservationDetail.status]}
              </p>
              <p className="destination">
                <span style={{ fontWeight: 700 }}>Reservation Date: </span>{' '}
                {format(new Date(reservationDetail.reservationDate), 'dd/MM/yyyy')}
              </p>
              <p className="destination">
                <span style={{ fontWeight: 700 }}>Time slot: </span>{' '}{reservationDetail.reservationHour.name}

              </p>
            </div>
          </div>

          <div className="inner-row">
            <p className="total">Total</p>
            <p className="price">${getPrice(reservationDetail)}</p>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default ReservationDetail
