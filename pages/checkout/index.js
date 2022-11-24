import Cart from 'components/Cart/CartInfo'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const CheckoutPage = () => {
  const router = useRouter()
  const cartSlice = useSelector((state) => state.checkout)
  if (router.isFallback) {
    return <h1>Loading ...</h1>
  }
  return <Cart cartSlice={cartSlice} />
}

export default CheckoutPage
