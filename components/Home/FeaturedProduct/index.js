import React from 'react'
import styles from './styles'
import FeaturedCard from '../FeaturedCard'
const FeaturedProduct = () => (
  <div className="container">
    <h1 className="title">Trending Products</h1>
    <p className="desc">Best products for your pets</p>
    <div className="featured-products">
      <FeaturedCard />
    </div>
    <style jsx>{styles}</style>
  </div>
)

export default FeaturedProduct
