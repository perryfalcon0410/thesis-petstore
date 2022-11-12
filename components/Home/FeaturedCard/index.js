// import Link from 'next/link'
// import React from 'react'
// import styles from './styles'
// import Image from 'next/image'
// import bigProduct from '/public/products/big-product-1.jpg'
// import Products from '../../Product/ProductList/Products'
// const FeaturedCard = () => {
//   return (
//     <div className="container">
//       <Products/>
//       <Link href={`https://google.com`} passHref>
//         <Image src={bigProduct} alt="product" width={450} height={450} />
//       </Link>
//       <h1 className="title">Đồ ăn cho chó </h1>
//       <span className="price">$ 20.00</span>

//       <style jsx>{styles}</style>
//     </div>
//   )
// }
// export default FeaturedCard
import styles from './styles'
import Image from 'next/image'

const Products = (products) => {
  return (
    <div className="elementor-column">
      <div className="elementor-column-wrapper">
        <div className="woocommerce">
          <ul className="products">
            {Array(10)
              .fill()
              .map((_el, idx) => (
                <li className="product" key={idx}>
                  <div className="product-img">
                    <img src="/products/big-product-1.jpg" alt="Product 1" />

                    <span>OUT OF STOCK</span>
                  </div>
                  <div className="product-detail">
                    <span className="product-category">Product treatment</span>
                    <a href="" className="product-link">
                      <h2>Alkin Mitecyn 50ml – Spray for treating dermatitis, fungus, scabies for dogs and cats</h2>
                    </a>
                    <span className="price">
                      14.00 <span>$</span>
                    </span>
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
