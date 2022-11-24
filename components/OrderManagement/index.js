import NavBar from 'components/NavBar'
import Link from 'next/link'
import { ORDER_TYPE } from 'utils/constant'
import OrderDetail from './OrderDetail'
import OrderList from './OrderList'
import styles from './styles'
import Title from './Title'
import { useSelector } from 'react-redux'
import Footer from 'components/Utils/Footer'

const OrderManagement = ({ orderType, orderList, orderDetail }) => {
  const userSlice = useSelector((state) => state.user)
  console.log(orderList)

  return (
    <div className="wrapper">
      <NavBar />
      <Title orderType={orderType} orderId={orderType === ORDER_TYPE.SINGLE ? orderDetail.id : ''} />
      {userSlice.id === null || userSlice.id === undefined ? (
        <div className="container">
          <p>You have not login yet!</p>
          <Link href="/sign-in">
            <a>Click here to login!</a>
          </Link>
        </div>
      ) : (
        <>
          {orderType === ORDER_TYPE.SINGLE ? (
            <OrderDetail orderDetail={orderDetail} />
          ) : (
            <OrderList orderList={orderList} />
          )}
        </>
      )}
      <Footer />
      <style jsx>{styles}</style>
    </div>
  )
}

export default OrderManagement
