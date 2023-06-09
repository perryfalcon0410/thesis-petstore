import { useState, useEffect } from 'react'
import ReservationManagement from 'components/ReservationManagement'

import { ORDER_TYPE } from 'utils/constant'
import { gql, useQuery } from '@apollo/client'

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
  // const userSlice = useSelector((state) => state.user)
  // const [loading, setLoading] = useState(true);

  // const client = new ApolloClient({
  //   uri: "https://thesis-backend-production-99f6.up.railway.app/graphql",
  //   cache: new InMemoryCache(),
  // });
  const { data } = useQuery(GET_RESERVATION_DETAIL, {
    uri: process.env.NEXT_PUBLIC_GRAPHQL_BACKEND_URL,
    variables: {
      reservationId: reservationId
    }
  });

  useEffect(() => {
    if (data && data.reservation) {
      setReservationDetail(data.reservation);
    }
  }, [data]);

  if (!reservationDetail) {
    return <h1>Loading ...</h1>
  }

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
