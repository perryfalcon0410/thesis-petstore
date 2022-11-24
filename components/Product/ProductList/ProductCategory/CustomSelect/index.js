import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from './styles'

const CustomSelect = ({ categoryList, query, totalProduct, setChosenCategory }) => {
  const router = useRouter()

  const firstCapitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  useEffect(() => {
    const productWrapper = document.querySelector('.product-wrapper')
    const selectResultsOption = document.querySelector('.select-results-options')
    const selectDropdown = document.querySelector('.select-dropdown')
    const navbarContainer = document.querySelector('.navbar-container')
    const productWrapperHeight = productWrapper.offsetHeight
    const navbarContainerHeight = navbarContainer.offsetHeight
    const handleScroll = () => {
      const bottomPos = selectResultsOption.getBoundingClientRect().bottom
      const topPos = selectResultsOption.getBoundingClientRect().top
      if (selectDropdown.classList.contains('move-top')) {
        if (topPos < navbarContainerHeight) {
          selectDropdown.classList.remove('move-top')
        }
      } else {
        if (bottomPos > productWrapperHeight) {
          selectDropdown.classList.add('move-top')
        }
      }
    }
    productWrapper.addEventListener('scroll', handleScroll)
    return () => {
      productWrapper.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleChangeCate = (cate) => {
    if (cate) {
      router.replace({
        pathname: '/products',
        query: {
          ...query,
          categories: cate._id,
          page: 1,
        },
      })
      setChosenCategory(cate)
    } else {
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
  }

  return (
    <span className="select-dropdown select-dropdown-below">
      <span className="select-results">
        <ul className="select-results-options">
          <li className="select-results-option" onClick={() => handleChangeCate('')}>
            {`All categories (${totalProduct})`}
          </li>
          {categoryList.map((cate) => {
            return (
              <li className="select-results-option" key={cate._id} onClick={() => handleChangeCate(cate)}>
                {`${firstCapitalize(cate.category_name)} (${cate.totalProducts})`}
              </li>
            )
          })}
        </ul>
      </span>
      <style jsx>{styles}</style>
    </span>
  )
}

export default CustomSelect
