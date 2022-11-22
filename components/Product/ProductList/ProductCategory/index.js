import { useState } from 'react'
import { useRouter } from 'next/router'
import CustomSelect from './CustomSelect'
import styles from './styles'

const firstCapitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const ProductCategory = ({ productListData }) => {
  const [isSelect, setIsSelect] = useState(false)
  const [chosenCategory, setChosenCategory] = useState('')
  const { queryParams: query, categories: categoryList, totalProducts: totalProduct } = productListData
  const router = useRouter()

  const handleChangeCate = () => {
    router.replace({
      pathname: '/products',
      query: {
        ...query,
        categories: '',
        page: 1,
      },
    })
    setChosenCategory('')
  }

  return (
    <div className="product-categories-container">
      <div className="product-categories-content">
        <h5>Product Category</h5>
        <span className="selection-container">
          <span className="selection-content select-selection--single">
            {chosenCategory ? (
              <>
                <span className="selection-rendered">{`${firstCapitalize(chosenCategory.category_name)} (${
                  chosenCategory.totalProducts
                })`}</span>
                <span className="selection-content-clear" onClick={handleChangeCate}>
                  x
                </span>
              </>
            ) : (
              <span className="selection-rendered">{`All categories (${totalProduct})`}</span>
            )}

            <span className="selection-content-arrow" role="presentation" onClick={() => setIsSelect(!isSelect)}>
              <b role="presentation"></b>
            </span>
          </span>
        </span>

        {isSelect && (
          <CustomSelect
            categoryList={categoryList}
            query={query}
            totalProduct={totalProduct}
            setChosenCategory={setChosenCategory}
          />
        )}
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default ProductCategory
