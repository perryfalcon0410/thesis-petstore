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
      const baseUrl = 'http://localhost:3333'
      const config = {
        headers: {
          Authorization: `Bearer ${userSlice.token}`,
        },
      }
      const orderData = await axios.get(`${baseUrl}/order/${orderId}`, config).then((res) => res.data.order)

      // ** Get shipping information
      const urlGHN = 'https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/detail'
      const configGHN = {
        headers: {
          'Content-Type': 'application/json',
          Token: '5afa38c1-5c4b-11ed-b8cc-a20ef301dcd7',
        },
      }
      const dataGHN = {
        order_code: orderData.shipping,
      }
      const shippingData = await axios.post(urlGHN, dataGHN, configGHN).then((res) => res.data.data)
      orderData.shipping = {
        totalFee: orderData.shippingFee,
        status: shippingData.status,
      }
      setOrderDetail(orderData)
    }
    fetchData()
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
