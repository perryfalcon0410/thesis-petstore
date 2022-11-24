import { useRouter } from 'next/router'
import Product from 'components/Product'
import { PRODUCT_TYPE } from 'utils/constant'
import axios from 'axios'

const ProductSinglePage = ({ productData }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading ...</h1>
  }

  return <Product productType={PRODUCT_TYPE.SINGLE} productData={productData} />
}

export async function getStaticPaths() {
  const pListIds = await axios.get(`${process.env.BACKEND_URL}/product/listId`).then((res) => res.data)

  return {
    paths: pListIds.map((id) => ({ params: { id } })),
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const { id } = params

  const productData = await axios.get(`${process.env.BACKEND_URL}/product/${id}`).then((res) => res.data.productDetail)

  if (!productData) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      productData,
    },
    revalidate: 10,
  }
}

export default ProductSinglePage
