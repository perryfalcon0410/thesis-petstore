import Cart from 'components/Cart/OrderComplete'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const OrderComplete = () => {
  const router = useRouter()
  const cartSlice = useSelector((state) => state.checkout)
  if (router.isFallback) {
    return <h1>Loading ...</h1>
  }
  return <Cart cartSlice={cartSlice} />
}

export default OrderComplete
