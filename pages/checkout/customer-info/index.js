import Cart from 'components/Cart/CustomerInfo'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const CustomerInfo = () => {
  const router = useRouter()
  const cartSlice = useSelector((state) => state.checkout)
  if (router.isFallback) {
    return <h1>Loading ...</h1>
  }
  return <Cart cartSlice={cartSlice} />
}

export default CustomerInfo
