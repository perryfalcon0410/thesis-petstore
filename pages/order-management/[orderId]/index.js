import { useState, useEffect } from 'react'
import OrderManagement from 'components/OrderManagement'
import { useSelector } from 'react-redux'
import { ORDER_TYPE } from 'utils/constant'
import axios from 'axios'

export default function OrderDetailPage({ orderId }) {
  const [orderDetail, setOrderDetail] = useState('')
  const userSlice = useSelector((state) => state.user)

  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}`
      const config = {
        headers: {
          Authorization: `Bearer ${userSlice.token}`,
        },
      }
      const orderData = await axios.get(`${baseUrl}/order/${orderId}`, config).then((res) => res.data)
      setOrderDetail(orderData.order)
    }
    if (userSlice.token) fetchData()
    return () => {
      setOrderDetail('')
    }
  }, [orderId, userSlice.token])

  if (!orderDetail) {
    return <h1>Loading ...</h1>
  }

  return <OrderManagement orderType={ORDER_TYPE.SINGLE} orderDetail={orderDetail} />
}

export async function getServerSideProps(context) {
  const { orderId } = context.params

  return {
    props: {
      orderId,
    },
  }
}
