import styles from './styles'
import ProductSingle from './ProductSingle'
import ProductList from './ProductList'
import Title from 'components/Product/Utils/Title'
import { PRODUCT_TYPE } from 'utils/constant'

const Product = ({ productType, productSingleData }) => {
  return (
    <div className="product-wrapper">
      <Title
        productType={productType}
        productName={productType === PRODUCT_TYPE.SINGLE ? productSingleData.name : ''}
      />
      {productType === PRODUCT_TYPE.SINGLE ? (
        <ProductSingle isModel={false} productSingleData={productSingleData} />
      ) : (
        <ProductList />
      )}
      <style jsx>{styles}</style>
    </div>
  )
}

export default Product
