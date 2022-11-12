import styles from './styles'
import Image from 'next/image'

const Products = (products) => {
  return (
    <div className="elementor-column">
      <div className="elementor-column-wrapper">
        <div className="woocommerce">
          <ul className="products">
            {Array(8)
              .fill()
              .map((_el, idx) => (
                <li className="product-wrapper" key={idx}>
                  <div className="product">
                    <div className="product-img">
                      <img src="/products/big-product-1.jpg" alt="Product 1" />
                    </div>
                    <div className="product-detail">
                      <span className="product-category">Product treatment</span>
                      <a href="" className="product-link">
                        <h2>
                          {'Alkin Mitecyn 50ml - Spray for treating dermatitis, fungus, scabies for dogs and cats'}
                        </h2>
                      </a>
                      <span className="price">
                        14.00 <span>$</span>
                      </span>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default Products
