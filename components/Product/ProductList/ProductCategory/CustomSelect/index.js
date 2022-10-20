import styles from './styles'

const CustomSelect = () => {
  return (
    <span className="select-dropdown select-dropdown-below">
      <span className="select-search select-search--dropdown">
        <input
          className="select-search-field"
          type="text"
          autocomplete="off"
          autocorrect="off"
          autocapitalize="none"
          spellcheck="false"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded="true"
          aria-owns="select-product_cat-results"
          aria-activedescendant="select-product_cat-result-7mdb-thuc-pham-thu-cung"
        />
      </span>
      <span className="select-results">
        <ul
          className="select-results-options"
          role="listbox"
          tabindex="-1"
          id="select-product_cat-results"
          aria-expanded="true"
          aria-activedescendant="select-product_cat-result-7mdb-thuc-pham-thu-cung"
        >
          <li
            className="select-results-option"
            id="select-product_cat-result-ksib-pate-sot"
            role="option"
            data-selected="false"
            aria-selected="false"
          >
            Pate &amp; Sốt&nbsp;&nbsp;(0)
          </li>
          <li
            className="select-results-option"
            id="select-product_cat-result-jbb7-phu-kien-thu-cung"
            role="option"
            data-selected="false"
            aria-selected="false"
          >
            Phụ kiện thú cưng&nbsp;&nbsp;(56)
          </li>
          <li
            className="select-results-option"
            id="select-product_cat-result-kerp-do-choi"
            role="option"
            data-selected="true"
            aria-selected="false"
          >
            Đồ chơi&nbsp;&nbsp;(6)
          </li>
          <li
            className="select-results-option"
            id="select-product_cat-result-9yjm-san-pham-dieu-tri"
            role="option"
            data-selected="false"
            aria-selected="false"
          >
            Sản phẩm điều trị&nbsp;&nbsp;(27)
          </li>
          <li
            className="select-results-option"
            id="select-product_cat-result-i9z0-san-pham-ve-sinh"
            role="option"
            data-selected="false"
            aria-selected="false"
          >
            Sản phẩm vệ sinh&nbsp;&nbsp;(70)
          </li>
          <li
            className="select-results-option"
            id="select-product_cat-result-0i7v-thuc-pham-chuc-nang"
            role="option"
            data-selected="false"
            aria-selected="false"
          >
            Thực phẩm chức năng&nbsp;&nbsp;(4)
          </li>
          <li
            className="select-results-option select-results-option--highlighted"
            id="select-product_cat-result-7mdb-thuc-pham-thu-cung"
            role="option"
            data-selected="false"
            aria-selected="true"
          >
            Thực phẩm thú cưng&nbsp;&nbsp;(101)
          </li>
          <li
            className="select-results-option"
            id="select-product_cat-result-1poy-banh-thuong"
            role="option"
            data-selected="false"
          >
            Bánh thưởng&nbsp;&nbsp;(26)
          </li>
          <li
            className="select-results-option"
            id="select-product_cat-result-lgda-hat"
            role="option"
            data-selected="false"
          >
            Hạt&nbsp;&nbsp;(3)
          </li>
          <li
            className="select-results-option"
            id="select-product_cat-result-anwt-pate-sot-thuc-pham-thu-cung"
            role="option"
            data-selected="false"
          >
            Pate &amp; Sốt&nbsp;&nbsp;(1)
          </li>
        </ul>
      </span>
      <style jsx>{styles}</style>
    </span>
  )
}

export default CustomSelect
