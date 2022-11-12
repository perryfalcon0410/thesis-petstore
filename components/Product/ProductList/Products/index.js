import Link from 'next/link'
import styles from './styles'
const Products = () => {
  return (
    <div className="elementor-column">
      <div className="elementor-column-wrapper">
        <div className="woocommerce">
          <p className="woocommerce-result-count">Show 1–12 of 242 results</p>
          <form className="woocommerce-ordering" action="">
            <select name="orderby" className="select-order">
              <option value="menu_order">The default order</option>
              <option value="popularity">Order by level of popularity</option>
              <option value="rating">Order by rating</option>
              <option value="date">Latest</option>
              <option value="price">Order by price: low to high</option>
              <option value="price-decs">Order by price: high to low</option>
            </select>
          </form>
          <ul className="products">
            {Array(9)
              .fill(undefined)
              .map((_el, idx) => (
                <li className="product" key={idx}>
                  <div className="product-img">
                    <img src="images/Product/product-1.png" alt="Product 1" />
                    <span>OUT OF STOCK</span>
                  </div>
                  <div className="product-detail">
                    <span className="product-category">Product treatment</span>
                    <Link href="/products/635a8ae350ce863f0643003f" passHref>
                      <a className="product-link">
                        <h2>Alkin Mitecyn 50ml – Spray for treating dermatitis, fungus, scabies for dogs and cats</h2>
                      </a>
                    </Link>
                    <span className="price">
                      14.00 <span>$</span>{' '}
                    </span>
                  </div>
                </li>
              ))}
          </ul>
          <nav className="woocommerce-pagination">
            <ul>
              {[1, 2, 3, 4, 5, '...', 6, 7, 8, 9, '→'].map((el, idx) => (
                <li className="page-number" key={idx}>
                  <span>{el}</span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default Products
