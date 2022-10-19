import { useRouter } from 'next/router'
import Product from 'components/Product'
import { PRODUCT_TYPE } from 'utils/constant'
import { productDetail } from 'components/mocks/productDetail'
import { consoleLog } from 'utils/function'

const ProductSinglePage = ({ productId }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading ...</h1>
  }
  consoleLog(productId)
  return <Product productType={PRODUCT_TYPE.SINGLE} productData={productDetail} />
}

export async function getServerSideProps(context) {
  const { productId } = context.query
  return {
    props: {
      productId,
    },
  }
}

export default ProductSinglePage
