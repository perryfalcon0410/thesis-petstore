/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import store from '../store'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Provider } from 'react-redux'

import 'styles/utils.scss'
import 'styles/responsive.scss'
import { UserProvider } from 'context/UserContext'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_BACKEND_URL,
  cache: new InMemoryCache(),
});
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pet Store</title>
        <meta name="description" content="Pet Store for Ecommerce" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600&family=Raleway:wght@300;400;500;600&family=IBM+Plex+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>

        </Provider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
