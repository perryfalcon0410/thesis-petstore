import { useState, useEffect } from 'react'
import ReservationManagement from 'components/ReservationManagement'
import { ORDER_TYPE } from 'utils/constant'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client'

const RESERVATION_LIST = gql`
query Query {
  userReservations {
    _id
    phoneNumber
    species
    breed
    weight
    reservationDate
    userName
    reservationHour {
      _id
      name
      time
      timeFrame
    }
    serviceType {
      _id
      name
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
      description
      timeServe
      typeId
    }
    locationType
    location {
      region
      district
      ward
      address
      description
    }
    note
    status
  }
  
}
`
const ReservationManagementPage = () => {
  const [reservationList, setReservationList] = useState([])
  const userSlice = useSelector((state) => state.user)
  const [loading, setLoading] = useState(true);
  const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new InMemoryCache(),
  });
  console.log(userSlice.token);
  const { error, data } = useQuery(RESERVATION_LIST, {
    context: {
      headers: {
        Authorization: `Bearer ${userSlice.token}`,
      },
    },
  });

  useEffect(() => {
    if (data && data.userReservations) {
      setReservationList(data.userReservations);
      setLoading(false);
    }
  }, [data]);


  if (!reservationList) {
    return <h1>Loading ...</h1>
  }
  console.log("resList", reservationList);
  return <ReservationManagement reservationType={ORDER_TYPE.LIST} reservationList={reservationList} />
}

export default ReservationManagementPage
