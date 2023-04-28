import styles from './styles'
import Link from 'next/link'
import Image from 'next/image'
import { IMAGE_QUALITY } from 'utils/constant'
import { format } from 'date-fns'
import { productDetail } from 'components/mocks/productDetail'
import { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
import { ApolloClient, InMemoryCache, gql, useMutation } from '@apollo/client'
const CANCEL_RESERVATION = gql`
mutation Mutation($updateReservationId: ID!, $reservation: UpdateReservationInput!) {
  updateReservation(id: $updateReservationId, reservation: $reservation) {
    _id
  }
}
`

const ReservationDetail = ({ reservationDetail }) => {
  const statusTitle = {
    BOOKED: "Booked",
    CANCELLED: "Cancelled",
    SUCCESS: "Success",
  }
  const [cancelId, setCancelId] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false);
  const capiStr = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  const handleCancel = (id) => {
    console.log(id)
    setCancelId(id);
    setShowConfirmation(true);
  }
  const [cancelReservationMutation, { loading: mutationLoading, error: mutationError }] = useMutation(CANCEL_RESERVATION, {
    client: new ApolloClient({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_BACKEND_URL,
      cache: new InMemoryCache(),
    })
  })
  const now = new Date();
  const reservationDate = new Date(reservationDetail.reservationDate);
  reservationDate.setDate(reservationDate.getDate() + 1);
  const handleConfirmationClose = async (confirmed) => {
    console.log("cancelId", cancelId);
    setShowConfirmation(false);
    if (confirmed) {
      try {
        const { data } = await cancelReservationMutation({
          variables: {
            updateReservationId: cancelId,
            reservation: {
              status: "CANCELLED"
            }
          },
        })
        alert("The reservation is canceled");
        console.log(data);
        window.location.href = "/reservation-management";
      }
      catch (error) {
        console.log(error);
        throw error;
      }
    }
  }
  const getPrice = (reservation) => {

    const price = reservation.serviceType.price.find((i) => {
      return Number(reservation.weight) >= i.minWeight && Number(reservation.weight) < i.maxWeight;
    });
    if (price) return price.priceNumber;
    else return 0;
    return 0;
  }
  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-large-7">
          <table>
            <thead>
              <tr>
                <th colSpan={2} className="product-name">
                  Service Type
                </th>
                <th className="product-price">Pet Type</th>
                <th className="product-quantity">Weight</th>

              </tr>
            </thead>
            <tbody>
              <td className="product-price" colSpan={2}>
                <span>{reservationDetail.serviceType.name}</span>
              </td>
              <td className="product-price">
                <span>{capiStr(reservationDetail.species)}</span>
              </td>
              <td className="product-price">
                <span>{reservationDetail.weight}kg</span>
              </td>

            </tbody>
          </table>
          <Link href="/reservation-management">
            <a className="product-path">
              <div className="go-back">
                <span className="material-icons back">west</span>
                <p>Go Back</p>
              </div>
            </a>
          </Link>
          {reservationDetail.status === 'BOOKED' && reservationDate <= now && (
            <a className="product-path" onClick={() => handleCancel(reservationDetail._id)}>
              <div className="go-back">

                <p>Cancel Reservation</p>
              </div>
            </a>
          )}
        </div>
        <div className="col-large-5">
          <div className="title">Reservation infomation</div>
          <div className="inner-row">
            <p className="shipping"></p>
            <div>
              <p className="destination">
                <span style={{ fontWeight: 700 }}>Pet: </span> {`${capiStr(reservationDetail.species)} - ${capiStr(reservationDetail.breed)}`}
              </p>
              <p className="destination">
                <span style={{ fontWeight: 700 }}>Status: </span> {statusTitle[reservationDetail.status]}
              </p>
              <p className="destination">
                <span style={{ fontWeight: 700 }}>Reservation Date: </span>{' '}
                {format(new Date(reservationDetail.reservationDate), 'dd/MM/yyyy')}
              </p>
              <p className="destination">
                <span style={{ fontWeight: 700 }}>Time slot: </span>{' '}{reservationDetail.reservationHour.name}

              </p>
            </div>
          </div>

          <div className="inner-row">
            <p className="total">Total</p>
            <p className="price">${getPrice(reservationDetail)}</p>
          </div>

        </div>
      </div>
      <style jsx>{styles}</style>
      <Box>
        <Dialog open={showConfirmation} onClose={() => handleConfirmationClose(false)}>
          <DialogTitle><Typography fontWeight={"bold"} fontSize={25}>Confirm Submission</Typography></DialogTitle>
          <DialogContent>
            <DialogContentText> Are you sure to cancel this reservation </DialogContentText>



          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleConfirmationClose(false)}>Go Back</Button>
            <Button onClick={() => handleConfirmationClose(true)}>Confirm</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  )
}

export default ReservationDetail
