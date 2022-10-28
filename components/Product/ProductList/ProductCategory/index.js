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
          <span className="selection-content select-selection--single">
            <span className="selection-rendered">
              Đồ chơi& (6)
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
