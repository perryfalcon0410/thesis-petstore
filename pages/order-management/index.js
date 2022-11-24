import { useState, useEffect } from 'react'
import OrderManagement from 'components/OrderManagement'
import { ORDER_TYPE } from 'utils/constant'
import { useSelector } from 'react-redux'
import axios from 'axios'

const OrderManagementPage = () => {
  const [orderList, setOrderList] = useState('')
  const userSlice = useSelector((state) => state.user)

  useEffect(() => {
    const fetchData = async () => {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/order`
      const config = {
        headers: {
          Authorization: `Bearer ${userSlice.token}`,
        },
      }
      const orderList = await axios.get(url, config).then((res) => res.data)
      setOrderList(orderList.orders)
    }
    if (userSlice.token) fetchData()
    return () => {
      setOrderList('')
    }
  }, [userSlice.token])

  if (!orderList) {
    return <h1>Loading ...</h1>
  }

  return <OrderManagement orderType={ORDER_TYPE.LIST} orderList={orderList} />
}

export default OrderManagementPage
