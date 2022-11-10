import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Cart from 'components/Cart'
import Delivery from 'components/Delivery'
import axios from 'axios'


const DeliveryPage = ({res1, res2}) => {
  console.log(res2)
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading ...</h1>
  }
  return <Delivery></Delivery>
}
export default DeliveryPage

export async function getServerSideProps(context) {
  const res1 = await axios.post('https://petstore-backend-iy2e.vercel.app/auth/signin',{'email': 'nam.vo@example.com', 'password': 'Namvo123456789@'}).then((response)=>{
      return response.data.accessToken;
  });

  const res2 = await axios.get('https://petstore-backend-iy2e.vercel.app/order?limit=5&page=1',{
    headers:{
      Authorization: `Bearer ${res1}`
    }
  }).then((response)=>{
      return response.data.orders;
  });
 

  // if (!res) {
  //   return {
  //     notFound: true,
  //   }
  // }

  return {
    props: { res1, res2 }, // will be passed to the page component as props
  }
}