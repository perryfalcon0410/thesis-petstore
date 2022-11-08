import { orderListMock } from 'components/mocks/order'
import OrderManagement from 'components/OrderManagement'
import { ORDER_TYPE } from 'utils/constant'

export default function OrderManagementPage() {
  return <OrderManagement orderType={ORDER_TYPE.LIST} orderList={orderListMock} />
}
