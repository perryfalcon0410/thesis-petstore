import { useState, useEffect } from 'react'
import ReservationManagement from 'components/ReservationManagement'
import { ORDER_TYPE } from 'utils/constant'
import { useSelector } from 'react-redux'
import { gql, useQuery } from '@apollo/client'

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
  // const [loading, setLoading] = useState(true);
  
  const { data } = useQuery(RESERVATION_LIST, {
    uri: process.env.NEXT_PUBLIC_GRAPHQL_BACKEND_URL,
    context: {
      headers: {
        Authorization: `Bearer ${userSlice.token}`,
      },
    },
  });

  useEffect(() => {
    if (data && data.userReservations) {
      setReservationList(data.userReservations);
    }
  }, [data]);


  if (!reservationList) {
    return <h1>Loading ...</h1>
  }
  
  return <ReservationManagement reservationType={ORDER_TYPE.LIST} reservationList={reservationList} />
}

export default ReservationManagementPage
