import NavBar from 'components/NavBar'
import Link from 'next/link'
import { ORDER_TYPE } from 'utils/constant'
import OrderDetail from './OrderDetail'
import OrderList from './OrderList'
import styles from './styles'
import Title from './Title'

const OrderManagement = ({ orderType, orderList, orderDetail }) => {
  const userSlice = {
    userId: 1,
    email: 'test@gmail.com',
    password: '123456',
  }
  console.log(orderDetail)

  return (
    <div className="wrapper">
      <NavBar />
      <Title orderType={orderType} orderId={orderType === ORDER_TYPE.SINGLE ? orderDetail.id : ''} />
      {userSlice === null || userSlice === undefined ? (
        <div className="container">
          <p>You have not login yet!</p>
          <Link href="#">
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
      <style jsx>{styles}</style>
    </div>
  )
}

export default OrderManagement
