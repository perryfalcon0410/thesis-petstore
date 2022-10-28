import { useEffect } from 'react'
import styles from './styles'

const CustomSelect = () => {
  useEffect(() => {
    const productWrapper = document.querySelector('.product-wrapper')
    const selectResultsOption = document.querySelector('.select-results-options')
    const selectDropdown = document.querySelector('.select-dropdown')
    const navbarContainer = document.querySelector('.navbar-container')
    const productWrapperHeight = productWrapper.offsetHeight
    const navbarContainerHeight = navbarContainer.offsetHeight
    productWrapper.onscroll = () => {
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
    return () => {
      productWrapper.removeEventListener('scroll')
    }
  }, [])
  return (
    <span className="select-dropdown select-dropdown-below">
      <span className="select-search select-search--dropdown">
        <input className="select-search-field" type="text" />
      </span>
      <span className="select-results">
        <ul className="select-results-options">
          <li className="select-results-option">Pate & Sốt (0)</li>
          <li className="select-results-option">Phụ kiện thú cưng (56)</li>
          <li className="select-results-option">Đồ chơi& (6)</li>
          <li className="select-results-option">Sản phẩm điều trị&(27)</li>
          <li className="select-results-option">Sản phẩm vệ sinh (70)</li>
          <li className="select-results-option">Thực phẩm chức năng (4)</li>
          <li className="select-results-option select-results-option--highlighted">Thực phẩm thú cưng (101)</li>
          <li className="select-results-option">Bánh thưởng (26)</li>
          <li className="select-results-option">Hạt (3)</li>
          <li className="select-results-option">Pate Sốt (1)</li>
        </ul>
      </span>
      <style jsx>{styles}</style>
    </span>
  )
}

export default CustomSelect
