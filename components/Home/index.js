import { useState, useEffect } from 'react'
import styles from './styles'
import Image from 'next/image'
import ProductInformation from 'components/Product/Utils/ProductInformation'
// import Link from 'next/link'
import { MIN_DESKTOP_WIDTH, MODEL_WIDTH_ABOVE_DESKTOP, MODEL_WIDTH_BELOW_DESKTOP } from 'utils/constant'
import { formatVNprice } from 'utils/function'

import NavBar from 'components/NavBar'
import FeaturedProduct from './FeaturedProduct'
import BlogPost from './BlogPost'
import Footer from './Footer'
import HeaderBanner from './HeaderBanner'

const Home = () => {
  return (
    <div className="container">
      <NavBar />
      <HeaderBanner />
      <FeaturedProduct />
      <BlogPost />
      <Footer />
      <style jsx>{styles}</style>
    </div>
  )
}

export default Home
