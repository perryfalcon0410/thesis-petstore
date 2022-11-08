import ProductCategory from './ProductCategory'
import FilterPrice from './ProductCategory/PriceFilter'
import Products from './Products'
import styles from './styles'

const ProductList = () => {
  return (
    <div className="elementor-container">
      <div className="elementor-row">
        <div className="elementor-row-left">
          <div className="elementor-column-wrap">
            <div className="elementor-widget-wrap">
              <FilterPrice />
              <ProductCategory />
            </div>
          </div>
        </div>
        <div className="elementor-row-right">
          <Products />
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default ProductList
