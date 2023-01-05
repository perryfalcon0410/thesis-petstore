import styles from './styles'
import NavBar from 'components/NavBar'
import FeaturedProduct from './FeaturedProduct'
// import BlogPost from './BlogPost'
import Footer from '../Utils/Footer'
import HeaderBanner from './HeaderBanner'
import MessengerChatBox from './MessengerChatBox'

const Home = ({ trendingProducts }) => {
  return (
    <div className="container">
      <NavBar />
      <HeaderBanner />
      <FeaturedProduct trendingProducts={trendingProducts} />
      {/* <BlogPost blogs={blogs} /> */}
      <MessengerChatBox />
      <Footer />
      <style jsx>{styles}</style>
    </div>
  )
}

export default Home
