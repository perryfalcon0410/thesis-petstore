import { useState } from 'react'
import ProductCategory from './ProductCategory'
import FilterPrice from './ProductCategory/FilterPrice'
import Products from './Products'
import styles from './styles'

const ProductList = ({ productListData, categoryList }) => {
  const [query, setQuery] = useState({
    page: 1,
    limit: 9,
    orderBy: '',
    categories: '',
  })

  return (
    <div className="elementor-container">
      <div className="elementor-row">
        <div className="elementor-row-left">
          <div className="elementor-column-wrap">
            <div className="elementor-widget-wrap">
              <FilterPrice minPrice={productListData.minPrice} maxPrice={productListData.maxPrice} />
              <ProductCategory
                categoryList={categoryList}
                query={query}
                setQuery={setQuery}
                totalProduct={productListData.total}
              />
            </div>
          </div>
        </div>
        <div className="elementor-row-right">
          <Products productListData={productListData} query={query} setQuery={setQuery} />
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default ProductList
