import { orderListMock } from 'components/mocks/order'
import OrderManagement from 'components/OrderManagement'
import { ORDER_TYPE } from 'utils/constant'

export default function OrderDetailPage({ orderDetail }) {
  return <OrderManagement orderType={ORDER_TYPE.SINGLE} orderDetail={orderDetail} />
}

export async function getServerSideProps(context) {
  const { orderId } = context.params
  const orderDetailMock = orderListMock.filter((order) => order.id === orderId)
  return {
    props: {
      orderDetail: orderDetailMock[0],
    }, // will be passed to the page component as props
  }
}
