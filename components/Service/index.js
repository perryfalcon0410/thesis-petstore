import styles from './styles'
import NavBar from 'components/NavBar'
import Footer from 'components/Utils/Footer'
import ReservationForm from './Form'
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Title from './Utils/Title'
const GET_SERVICE_TYPE = gql`
query serviceType {
  serviceTypes {
    _id
    price {
      name
      serviceId
      price
      priceNumber
      minWeight
      maxWeight
      updatedAt
    }
    selectedCount
    name
    description
    timeServe
    typeId
  }
  getHours {
    _id
    name
    time
    timeFrame
    slot
  }
}`
const Service = () => {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_BACKEND_URL,
    cache: new InMemoryCache(),
  });
  const [serviceTypeData, setServiceTypeData] = useState("");
  const [getHours, setGetHours] = useState("");
  const { loading, error, data } = useQuery(GET_SERVICE_TYPE, {});
  console.log(data);
  useEffect(() => {
    if (data && data.serviceTypes) {
      setServiceTypeData(data.serviceTypes);
    }
    if (data && data.getHours) {
      setGetHours(data.getHours);
    }
  }, [data]);

  return (
    <div className="product-wrapper">
      <NavBar />
      <Title />
      <ReservationForm serviceTypeDetail={serviceTypeData} hoursDetail={getHours} />
      <Footer />
      <style jsx>{styles}</style>
    </div>
  )
}

export default Service
