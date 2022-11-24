import ProductCategory from './ProductCategory'
import FilterPrice from './ProductCategory/FilterPrice'
import Products from './Products'
import styles from './styles'

const ProductList = ({ productListData }) => {
  return (
    <div className="elementor-container">
      <div className="elementor-row">
        <div className="elementor-row-left">
          <div className="elementor-column-wrap">
            <div className="elementor-widget-wrap">
              <FilterPrice productListData={productListData} />
              <ProductCategory productListData={productListData} />
            </div>
          </div>
        </div>
        <div className="elementor-row-right">
          <Products productListData={productListData} />
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default ProductList
