import { useRouter } from 'next/router'
import Product from 'components/Product'
import { PRODUCT_TYPE } from 'utils/constant'
import { productDetail } from 'components/mocks/productDetail'

const ProductListPage = () => {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading ...</h1>
  }
  return <Product productType={PRODUCT_TYPE.LIST} productData={productDetail} />
}

export default ProductListPage
