import { useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import {
   Backdrop,
   Box,
   Button,
   Card,
   CardContent,
   CardHeader,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
   Divider,
   FormControl,
   Grid,
   InputLabel,
   MenuItem,
   Select,
   Stack,
   TextField,
   Typography,
} from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import axios from "axios";
import { useSelector } from "react-redux";
import Router from "next/router";
import { gql, useMutation, ApolloClient, InMemoryCache } from '@apollo/client';
const CREATE_RESERVATION = gql`
mutation CreateReservation($reservation: ReservationInput!) {
   createReservation(reservation: $reservation) {
     _id
   }
 }
`;

const ReservationForm = ({ serviceTypeDetail, hoursDetail }) => {
   const [values, setValues] = useState({
      userName: "",
      phoneNumber: "",
      species: "",
      breed: "",
      weight: "",
      serviceType: "",
      reservationDate: "",
      reservationHour: "",
      locationType: "",
      region: "",
      district: "",
      ward: "",
      address: "",
      description: "",
   });
   const [timeValue, setTimeValue] = useState("")
   const userSlice = useSelector((state) => state.user)
   const [showConfirmation, setShowConfirmation] = useState(false);
   const navigateToPageAndRefresh = (targetPage) => {
      // Navigate to the target page
      Router.push(targetPage);

      // Reload the page after a short delay
      setTimeout(() => {
         window.location.reload();
      }, 10);
   };
   const [createReservationMutation, { loading: mutationLoading, error: mutationError }] = useMutation(CREATE_RESERVATION, {
      context: {
         headers: {
            Authorization: `Bearer ${userSlice.token}`,
         },
      },
      client: new ApolloClient({
         uri: process.env.NEXT_PUBLIC_GRAPHQL_BACKEND_URL,
         cache: new InMemoryCache(),
      })
   })
   console.log("values", values);
   const renderReservationSpecies = () => {
      const reservationSpecies = ["dog", "cat"];
      const speciesTitle = {
         dog: "Dog",
         cat: "Cat",
      };
      return reservationSpecies.map((status, idx) => (
         <MenuItem value={status} key={idx}>
            {speciesTitle[status]}
         </MenuItem>
      ));
   };
   const capiStr = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
   }
   const renderLocationType = () => {
      const locationType = ["HOME", "STORE"];
      const speciesTitle = {
         HOME: "Home",
         STORE: "Store",
      };
      return locationType.map((status, idx) => (
         <MenuItem value={status} key={idx}>
            {speciesTitle[status]}
         </MenuItem>
      ));
   };
   const getPrice = () => {
      if (values.serviceType._id) {
         const price = values.serviceType.price.find((i) => {
            return Number(values.weight) >= i.minWeight && Number(values.weight) < i.maxWeight;
         });
         if (price) return price.priceNumber;
         else return 0;
      }
      return 0;
   }
   const handleChangeServiceType = (event) => {
      console.log("Event", event)
      for (const i in serviceTypeDetail) {
         if (serviceTypeDetail[i]._id == event.target.value) {
            setValues({
               ...values,
               serviceType: serviceTypeDetail[i]
            });

         };
      }
   }
   const handleChangeHour = (event) => {
      console.log("Event", event)
      for (const i in hoursDetail) {
         if (hoursDetail[i]._id == event.target.value) {
            setValues({
               ...values,
               reservationHour: hoursDetail[i]
            });

         };
      }
   }
   const renderReservationServiceTypes = () => {
      const service_name = [];
      const service_id = [];
      const serviceTypeTitle = {};
      console.log("detail", serviceTypeDetail);
      for (const serviceType in serviceTypeDetail) {
         service_name.push(serviceTypeDetail[serviceType].name);
         service_id.push(serviceTypeDetail[serviceType]._id);
      }
      for (const i in service_name) {
         serviceTypeTitle[service_id[i]] = service_name[i];
      }
      console.log("title", serviceTypeTitle)
      return Object.keys(serviceTypeTitle).map((status, idx) => (
         <MenuItem value={status} key={idx}>
            {serviceTypeTitle[status]}
         </MenuItem>
      ));
   };
   const renderReservationHour = () => {
      const hour_name = [];
      const hour_id = [];
      const hourTitle = {};
      console.log("hourDetail", hoursDetail);
      for (const hour in hoursDetail) {
         hour_name.push(hoursDetail[hour].name);
         hour_id.push(hoursDetail[hour]._id);
      }
      for (const i in hour_name) {
         hourTitle[hour_id[i]] = hour_name[i];
      }
      console.log("hourTitle", hourTitle)
      return Object.keys(hourTitle).map((status, idx) => (
         <MenuItem value={status} key={idx}>
            {hourTitle[status]}
         </MenuItem>
      ));
   };
   const handleChange = (event) => {
      console.log("event", event);
      setValues({
         ...values,
         [event.target.name]: event.target.value,
      });
   };
   const handleLocation = (event) => {
      if (event.target.value === "STORE") {
         setValues({
            ...values,
            locationType: "STORE",
            region: "Ho Chi Minh",
            district: "10",
            ward: "13",
            address: "270 Ly Thuong Kiet",
         })
      }
      else {
         setValues({
            ...values,
            locationType: "HOME",
            region: "",
            district: "",
            ward: "",
            address: "",
         })
      }
   }
   const handleDateChange = (date) => {
      console.log(date)
      setTimeValue(date)
      setValues({
         ...values,
         reservationDate: dayjs(date).format(),
         reservationHour: {}
      });
   };
   const handleSaveChanges = async (event) => {
      event.preventDefault();
      if (values.userName && values.phoneNumber && values.species && values.weight && values.breed && values.locationType && values.ward && values.address) {
         setShowConfirmation(true);
      }
      else {
         // if any required field is empty, show an error message
         alert("Please fill in all required fields");
      };
   }
   const handleConfirmationClose = async (confirmed) => {
      // This function is called when the confirmation box is closed
      // It handles the user's choice
      setShowConfirmation(false);
      if (confirmed) {
         // The user confirmed, so submit the form
         // TODO: Submit the form data
         const input = {
            userName: values.userName,
            phoneNumber: values.phoneNumber,
            species: values.species,
            breed: values.breed,
            weight: Number(values.weight),
            reservationDate: values.reservationDate,
            reservationHour: values.reservationHour._id,
            serviceType: values.serviceType._id,
            locationType: values.locationType,
            location: {
               region: values.region,
               district: values.district,
               ward: values.ward,
               address: values.address,
               description: values.description,
            },
            note: values.description,
            status: "BOOKED"
         }
         console.log("data", input);
         console.log("key", userSlice.token);
         try {
            const { data } = await createReservationMutation({
               variables: { reservation: input },
            })
            alert("The reservation is booked successfully");
            Router.push("/");
         }
         catch (error) {
            console.log(error);
            throw error;
         }
      }
   };
   return (

      <Box mx="auto" width="50%">
         <Card>
            <CardHeader title="Reservation Detail" />
            <Divider />
            <form onSubmit={handleSaveChanges}>
               <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                     <TextField
                        fullWidth
                        label="Name"
                        name="userName"
                        onChange={handleChange}
                        value={values.userName}
                        variant="outlined"
                        required
                     />
                  </Grid>
                  <Grid item md={6} xs={12}>
                     <TextField
                        fullWidth
                        label="Phone Number"
                        name="phoneNumber"
                        onChange={handleChange}
                        value={values.phoneNumber}
                        variant="outlined"
                        required
                     />
                  </Grid>

                  <Grid item md={6} xs={12}>
                     <FormControl sx={{ width: "100%" }}>
                        <InputLabel id="select-autowidth-label">Species *</InputLabel>
                        <Select
                           labelId="select-autowidth-label"
                           name="species"
                           value={values.species}
                           onChange={handleChange}
                           label="Species"
                        >
                           {renderReservationSpecies()}
                        </Select>
                     </FormControl>
                  </Grid>
                  <Grid item md={6} xs={12}>
                     <TextField
                        name="breed"
                        label="Breed"
                        value={values.breed}
                        onChange={handleChange}
                        required
                        fullWidth
                     />
                  </Grid>
                  <Grid item md={6} xs={12}>
                     <TextField
                        fullWidth
                        label="Weight (Kg)"
                        name="weight"
                        onChange={handleChange}
                        value={values.weight}
                        variant="outlined"
                        required
                     />
                  </Grid>
                  <Grid item md={6} xs={12}>
                     <FormControl sx={{ width: "100%" }}>
                        <InputLabel id="select-autowidth-label">Location Type *</InputLabel>
                        <Select
                           labelId="select-autowidth-label"
                           name="locationType"
                           value={values.locationType}
                           onChange={handleLocation}
                           label="locationType"
                           required
                        >
                           {renderLocationType()}
                        </Select>
                     </FormControl>
                  </Grid>

                  <Grid item md={6} xs={12} style={{ display: values.locationType === "HOME" ? "block" : "none" }}>
                     <TextField
                        fullWidth
                        label="Province/City"
                        name="region"
                        onChange={handleChange}
                        value={values.region}
                        variant="outlined"
                        required
                     />
                  </Grid>

                  <Grid item md={6} xs={12} style={{ display: values.locationType === "HOME" ? "block" : "none" }}>
                     <TextField
                        fullWidth
                        label="District"
                        name="district"
                        onChange={handleChange}
                        value={values.district}
                        variant="outlined"
                     />
                  </Grid>
                  <Grid item md={6} xs={12} style={{ display: values.locationType === "HOME" ? "block" : "none" }}>
                     <TextField
                        fullWidth
                        label="Ward"
                        name="ward"
                        onChange={handleChange}
                        value={values.ward}
                        variant="outlined"
                        required
                     />
                  </Grid>
                  <Grid item md={6} xs={12} style={{ display: values.locationType === "HOME" ? "block" : "none" }}>
                     <TextField
                        fullWidth
                        label="Address"
                        name="address"
                        onChange={handleChange}
                        value={values.address}
                        variant="outlined"
                        required
                     />
                  </Grid>

                  <Grid item md={12} xs={12}>
                     <FormControl sx={{ width: "100%" }}>
                        <InputLabel id="select-autowidth-label">Service Type *</InputLabel>
                        <Select
                           labelId="select-autowidth-label"
                           name="serviceType"
                           value={values.serviceType._id || ""}
                           onChange={handleChangeServiceType}
                           label="serviceType"
                        >
                           {renderReservationServiceTypes()}
                        </Select>
                     </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <LocalizationProvider dateAdapter={AdapterDayjs} dateFormats={{ date: 'DD/MM/YYYY' }}>
                        <DatePicker
                           fullWidth
                           label="Date *"
                           name="reservationDate"
                           value={timeValue}
                           onChange={handleDateChange}
                           renderInput={(params) => (
                              <TextField {...params} variant="outlined" />
                           )}

                        />
                     </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <FormControl sx={{ width: "100%" }}>
                        <InputLabel id="select-autowidth-label">Time *</InputLabel>
                        <Select
                           labelId="select-autowidth-label"
                           name="reservationHour"
                           value={values.reservationHour._id || ""}
                           onChange={handleChangeHour}
                           label="reservationHour"
                        >
                           {values.reservationDate && renderReservationHour()}
                        </Select>
                     </FormControl>
                  </Grid>
                  <Grid item md={12} xs={24}>
                     <TextField
                        fullWidth
                        label="Note"
                        name="description"
                        onChange={handleChange}
                        value={values.description}
                        variant="outlined"
                        multiline
                        rows={5}
                     />
                  </Grid>
               </Grid>



            </form>
            <Box
               sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  p: 2,
               }}
            >
               <Button color="primary" variant="contained" onClick={handleSaveChanges}>
                  Submit
               </Button>
            </Box>
         </Card>
         <Box>
            <Dialog open={showConfirmation} onClose={() => handleConfirmationClose(false)}>
               <DialogTitle><Typography fontWeight={"bold"} fontSize={25}>Confirm Submission</Typography></DialogTitle>
               <DialogContent>
                  <DialogContentText>

                  </DialogContentText>
                  <Box sx={{ mt: 2, p: 2, bgcolor: "grey.100" }}>
                     <Typography>Name: {values.userName}</Typography>
                  </Box>
                  <Box sx={{ mt: 2, p: 2, bgcolor: "grey.100" }}>
                     <Typography>Phone Number: {values.phoneNumber}</Typography>
                  </Box>
                  <Box sx={{ mt: 2, p: 2, bgcolor: "grey.100" }}>
                     <Typography>Pet information: {capiStr(values.species)} - {capiStr(values.breed)}</Typography>
                  </Box>
                  <Box sx={{ mt: 2, p: 2, bgcolor: "grey.100" }}>
                     <Typography>Weight: {values.weight}Kg</Typography>
                  </Box>
                  <Box sx={{ mt: 2, p: 2, bgcolor: "grey.100" }}>
                     <Typography>Location: {values.locationType === "STORE" ? `${capiStr(values.locationType)}` : `${values.address} - ${values.district} - ${values.region}`}</Typography>
                  </Box>
                  <Box sx={{ mt: 2, p: 2, bgcolor: "grey.100" }}>
                     <Typography>Service: {values.serviceType.name}</Typography>
                  </Box>
                  <Box sx={{ mt: 2, p: 2, bgcolor: "grey.100" }}>
                     <Typography>Name: {values.userName}</Typography>
                  </Box>
                  <Box sx={{ mt: 2, p: 2, bgcolor: "grey.100" }}>
                     <Typography>Date and Time: {values.reservationDate.slice(0, 10)} - {values.reservationHour.name}</Typography>
                  </Box>
                  <Box sx={{ mt: 2, p: 2, bgcolor: "grey.100" }}>
                     <Typography>Note: {values.description}</Typography>
                  </Box>
                  <Box sx={{ mt: 2, p: 2 }}>
                     <Typography fontSize={20} fontWeight={"bold"}>Price: ${getPrice()}</Typography>
                  </Box>


               </DialogContent>
               <DialogActions>
                  <Button onClick={() => handleConfirmationClose(false)}>Go Back</Button>
                  <Button onClick={() => handleConfirmationClose(true)}>Confirm</Button>
               </DialogActions>
            </Dialog>

            <Backdrop open={showConfirmation} sx={{ zIndex: 1 }}>
               <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ height: "100vh" }}
               >
                  {/* Add any content you want to show behind the confirmation box here */}
               </Stack>
            </Backdrop>
         </Box>
      </Box >

   );
};

export default ReservationForm;
