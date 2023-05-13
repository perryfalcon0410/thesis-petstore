import Home from '../components/Home';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

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
  const userSlice = useSelector((state) => state.user);
  const [recommendProducts, setRecommendProducts] = useState([]);
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_BACKEND_URL,
    cache: new InMemoryCache(),
  });

  const { error, data } = useQuery(RECOMMEND_PRODUCTS, {
    skip: !userSlice.token,
    context: {
      headers: {
        Authorization: `Bearer ${userSlice.token}`,
      },
    },
  });

  useEffect(() => {
    if (data && data.recommendProduct) {
      setRecommendProducts(data.recommendProduct);
    }
  }, [data]);

  if (error) {
    // console.log(error);
    return <Home trendingProducts={trendingProducts} />;
  }

  if (recommendProducts.length === 0) {
    return <Home trendingProducts={trendingProducts} />;
  }
  return <Home trendingProducts={recommendProducts} />;
};

export async function getStaticProps() {
  try {
    const trendingProducts = await axios.get(`${process.env.BACKEND_URL}/home`).then((res) => res.data.trendingProducts);
    const blogs = await axios
      .get(`${process.env.BACKEND_URL}/blog`)
      .then((res) => res.data);


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
