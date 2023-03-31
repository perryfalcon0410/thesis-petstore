import NavBar from 'components/NavBar'
import Link from 'next/link'
import { ORDER_TYPE } from 'utils/constant'
import ReservationDetail from './ReservationDetail'
import ReservationList from './ReservationList'
import styles from './styles'
import Title from './Title'
import { useSelector } from 'react-redux'
import Footer from 'components/Utils/Footer'

const ReservationManagement = ({ reservationType, reservationList, reservationDetail }) => {
  const userSlice = useSelector((state) => state.user)
  console.log(reservationList)
  
  return (
    <div className="wrapper">
      <NavBar />
      <Title reservationType={reservationType} reservationId={reservationType === ORDER_TYPE.SINGLE ? reservationDetail.id : ''} />
      {userSlice.id === null || userSlice.id === undefined ? (
        <div className="container">
          <p>You have not login yet!</p>
          <Link href="/sign-in">
            <a>Click here to login!</a>
          </Link>
        </div>
      ) : (
        <>
          {reservationType === ORDER_TYPE.SINGLE ? (
            <ReservationDetail reservationDetail={reservationDetail} />
          ) : (
            <ReservationList reservationList={reservationList} />
          )}
        </>
      )}
      <Footer />
      <style jsx>{styles}</style>
    </div>
  )
}

export default ReservationManagement
