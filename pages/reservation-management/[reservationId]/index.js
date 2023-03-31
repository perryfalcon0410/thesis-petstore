import { useState, useEffect } from 'react'
import ReservationManagement from 'components/ReservationManagement'
import { useSelector } from 'react-redux'
import { ORDER_TYPE } from 'utils/constant'
import axios from 'axios'
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client'

const GET_RESERVATION_DETAIL = gql`
query Reservation($reservationId: ID!) {
  reservation(id: $reservationId) {
    _id
    userName
    phoneNumber
    species
    breed
    weight
    reservationDate
    reservationHour {
      name
    }
    serviceType {
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
export default function ReservationDetailPage({ reservationId }) {
  const [reservationDetail, setReservationDetail] = useState('')
  const userSlice = useSelector((state) => state.user)
  const [loading, setLoading] = useState(true);
  console.log("resId", reservationId);
  const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new InMemoryCache(),
  });
  const { error, data } = useQuery(GET_RESERVATION_DETAIL, {
    variables: {
      reservationId: reservationId
    }
  });

  useEffect(() => {
    if (data && data.reservation) {
      setReservationDetail(data.reservation);
      setLoading(false);
    }
  }, [data]);

  if (!reservationDetail) {
    return <h1>Loading ...</h1>
  }
  console.log(reservationDetail)
  return <ReservationManagement reservationType={ORDER_TYPE.SINGLE} reservationDetail={reservationDetail} />
}

export async function getServerSideProps(context) {
  const { reservationId } = context.params

  return {
    props: {
      reservationId,
    },
  }
}
