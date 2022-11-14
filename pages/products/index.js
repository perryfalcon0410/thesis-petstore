import { useRouter } from 'next/router'
import Product from 'components/Product'
import { PRODUCT_TYPE } from 'utils/constant'
import axios from 'axios'

const ProductListPage = ({ productList, categoryList }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading ...</h1>
  }

  return <Product productType={PRODUCT_TYPE.LIST} productData={productList} categoryList={categoryList} />
}

export async function getServerSideProps(context) {
  const { page = 1, limit = 9, orderBy = '', categories = '' } = context.query
  const options = {
    page,
    limit,
  }
  if (orderBy) options.orderBy = orderBy
  if (categories) options.categories = categories

  const productList = await axios.get(`${process.env.HOST_API}/product`, { params: options }).then((res) => res.data)

  const categoryList = await axios.get(`${process.env.HOST_API}/categories`).then((res) => res.data)

  return {
    props: { productList, categoryList },
  }
}

export default ProductListPage
