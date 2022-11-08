import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Cart from 'components/Cart'

const CheckoutPage = () => {
  const router = useRouter()
  const cartSlice = useSelector((state) => state.checkout)
  if (router.isFallback) {
    return <h1>Loading ...</h1>
  }
  return <Cart cartSlice={cartSlice} />
}

export default CheckoutPage
