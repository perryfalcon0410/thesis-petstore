import Home from '../components/Home';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

const RECOMMEND_PRODUCTS = gql`
  query RecommendProduct {
    recommendProduct {
      _id
      name
      price
      categories {
        category_name
      }
      images {
        url
      }
    }
  }
`;

const HomePage = ({ trendingProducts }) => {

  return <Home trendingProducts={trendingProducts} />;
};

export async function getStaticProps() {
  try {
    const trendingProducts = await axios.get(`${process.env.BACKEND_URL}/home`).then((res) => res.data.trendingProducts);
    const blogs = await axios
      .get(`${process.env.BACKEND_URL}/blog`)
      .then((res) => res.data);
    console.log(process.env.BACKEND_URL);

    return {
      props: {
        trendingProducts,
        blogs,
      },
      revalidate: 10,
    };
  } catch (e) {
    console.log(e);

    return {
      props: {
        trendingProducts: [],
        blogs: [],
      },
      revalidate: 10,
    };
  }
}

export default HomePage;
