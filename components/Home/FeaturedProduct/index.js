import React from 'react'
import styles from './styles'
import FeaturedCard from '../FeaturedCard'
const FeaturedProduct = ({ trendingProducts }) => (
  <div className="container">
    <h1 className="title">Trending Products</h1>
    <p className="desc">Best products for your pets</p>
    <div className="featured-products">
      <FeaturedCard trendingProducts={trendingProducts} />
    </div>
    <style jsx>{styles}</style>
  </div>
)

export default FeaturedProduct
