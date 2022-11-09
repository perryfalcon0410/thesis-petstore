import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Cart from 'components/Cart'
import Delivery from 'components/Delivery'


const DeliveryPage = () => {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading ...</h1>
  }
  return <Delivery></Delivery>
}
export default DeliveryPage
