import { useState, useEffect } from 'react'
import { orderListMock } from 'components/mocks/order'
import OrderManagement from 'components/OrderManagement'
import { ORDER_TYPE } from 'utils/constant'
import { useSelector } from 'react-redux'
import axios from 'axios'

const OrderManagementPage = () => {
  const [orderList, setOrderList] = useState('')
  const userSlice = useSelector((state) => state.user)

  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = 'http://localhost:3333'
      const config = {
        headers: {
          Authorization: `Bearer ${userSlice.token}`,
        },
      }
      const orderList = await axios.get(`${baseUrl}/order`, config).then((res) => res.data.orders)

      // ** Get shipping information
      const urlGHN = 'https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/detail'
      const configGHN = {
        headers: {
          'Content-Type': 'application/json',
          Token: '5afa38c1-5c4b-11ed-b8cc-a20ef301dcd7',
        },
      }
      for (const order of orderList) {
        const dataGHN = {
          order_code: order.shipping,
        }
        const shippingData = await axios.post(urlGHN, dataGHN, configGHN).then((res) => res.data.data)
        order.shipping = {
          totalFee: order.shippingFee,
          status: shippingData.status,
        }
      }
      setOrderList(orderList)
      console.log(orderList)
    }
    fetchData()
    return () => {
      setOrderList('')
    }
  }, [])

  if (!orderList) {
    return <h1>Loading ...</h1>
  }

  return <OrderManagement orderType={ORDER_TYPE.LIST} orderList={orderList} />
}

export default OrderManagementPage
