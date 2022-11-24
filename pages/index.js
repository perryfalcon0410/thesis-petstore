import Home from '../components/Home'
import axios from 'axios'

const HomePage = ({ trendingProducts, blogs }) => {
  return <Home trendingProducts={trendingProducts} blogs={blogs} />
}

export async function getStaticProps() {
  try {
    const trendingProducts = await axios.get(`${process.env.BACKEND_URL}/home`).then((res) => res.data.trendingProducts)
    const blogs = await axios.get(`${process.env.BACKEND_URL}/blog`).then((res) => res.data)

    return {
      props: {
        trendingProducts,
        blogs,
      },
      revalidate: 10,
    }
  } catch (e) {
    console.log(e)
  }
}

export default HomePage
