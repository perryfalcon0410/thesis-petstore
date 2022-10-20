import { useState } from 'react'
import CustomSelect from './CustomSelect'
import styles from './styles'

const ProductCategory = () => {
  const [isSelect, setIsSelect] = useState(false)

  return (
    <div className="product-categories-container">
      <div className="product-categories-content">
        <h5>Product Category</h5>
        <span className="selection-container">
          <span
            className="selection-content select-selection--single"
            /* aria-haspopup="true" */
            /* aria-expanded="true" */
            /* aria-labelledby="select-product_cat-container" */
            /* role="combobox" */
            /* aria-owns="select-product_cat-results" */
            /* aria-activedescendant="select-product_cat-result-1poy-banh-thuong" */
          >
            <span
              className="selection-rendered"
              /* id="select-product_cat-container" */
              /* role="textbox" */
              /* aria-readonly="true" */
            >
              &nbsp;&nbsp;&nbsp;Đồ chơi&nbsp;&nbsp;(6)
              <span className="selection-content-clear">×</span>
            </span>
            <span className="selection-content-arrow" role="presentation" onClick={() => setIsSelect(!isSelect)}>
              <b role="presentation"></b>
            </span>
          </span>
        </span>

        {isSelect && <CustomSelect />}
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default ProductCategory
