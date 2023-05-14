import { useEffect, useState } from "react";
import dayjs from 'dayjs';
import styles from "./styles";
import {
   Backdrop,
   Box,
   Button,
   Card,

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
import { SignInForm, SignUpForm } from "components/Cart/CartInfo/ShoppingCartSection/form";




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
      regionId: "",
      district: "",
      districtId: "",
      ward: "",
      wardId: "",
      address: "",
      description: "",
   });
   const GHN_Token = '5e301d1a-5c48-11ed-8636-7617f3863de9'
   const [listRegion, setListRegion] = useState([])
   const [listDistrict, setListDistrict] = useState([])
   const [listWard, setListWard] = useState([])
   const [timeValue, setTimeValue] = useState("")
   const userSlice = useSelector((state) => state.user)
   const [showConfirmation, setShowConfirmation] = useState(false);


   const now = new Date();
   const minDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2);
   useEffect(() => {
      const fetchRegion = async () => {
         const url = 'https://online-gateway.ghn.vn/shiip/public-api/master-data/province'
         const config = {
            headers: {
               Token: GHN_Token,
            },
         }
         const regions = await axios.get(url, config).then((res) => res.data)
         const filteredRegions = regions.data.filter((region) => {
            return region.ProvinceName === 'Hồ Chí Minh';
         });
         setListRegion(filteredRegions)

      }
      fetchRegion()
      return () => { }
   }, [])
   const handleSelectRegion = async (regionId) => {
      const url = 'https://online-gateway.ghn.vn/shiip/public-api/master-data/district'
      const body = {
         province_id: regionId,
      }
      const config = {
         headers: {
            Token: GHN_Token,
         },
      }
      const districts = await axios.post(url, body, config).then((res) => res.data)
      setListDistrict(districts.data)

   }

   const handleSelectDistrict = async (districtId) => {
      const url = 'https://online-gateway.ghn.vn/shiip/public-api/master-data/ward'
      const body = {
         district_id: districtId,
      }
      const config = {
         headers: {
            Token: GHN_Token,
         },
      }
      const wards = await axios.post(url, body, config).then((res) => res.data)
      setListWard(wards.data)

   }

   const [createReservationMutation] = useMutation(CREATE_RESERVATION, {
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
      for (const i in serviceTypeDetail) {
         if (serviceTypeDetail[i]._id == event.target.value) {
            setValues({
               ...values,
               serviceType: serviceTypeDetail[i]
            });
         }
      }
   };

   const handleChangeHour = (event) => {

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
      const service_name = []
      const service_id = []
      const serviceTypeTitle = {}

      for (const serviceType in serviceTypeDetail) {
         service_name.push(serviceTypeDetail[serviceType].name);
         service_id.push(serviceTypeDetail[serviceType]._id);
      }
      for (const i in service_name) {
         if (service_name[i].toLowerCase().includes(values.species.toLowerCase())) {
            serviceTypeTitle[service_id[i]] = service_name[i];
         }
      }

      const menuItem = Object.keys(serviceTypeTitle).map((status, idx) => (
         <MenuItem value={status} key={idx}>
            {serviceTypeTitle[status]}
         </MenuItem>
      ));
      if (userSlice.token) {
         menuItem[0] = (
            <MenuItem value={Object.keys(serviceTypeTitle)[0]} key={0}>
               {serviceTypeTitle[Object.keys(serviceTypeTitle)[0]]} (Recommend)
            </MenuItem >
         );
      }
      return menuItem;
   };
   const renderReservationHour = () => {
      const hour_name = [];
      const hour_id = [];
      const hourTitle = {};

      for (const hour in hoursDetail) {
         hour_name.push(hoursDetail[hour].name);
         hour_id.push(hoursDetail[hour]._id);
      }
      for (const i in hour_name) {
         hourTitle[hour_id[i]] = hour_name[i];
      }


      return Object.keys(hourTitle).map((status, idx) => (
         <Button variant="outlined" value={status} key={idx}>
            {hourTitle[status]}
         </Button>
      ));
      // return (
      //    <Grid container spacing={2}>
      //       {Object.keys(hourTitle).map((status, idx) => (
      //          <Grid item xs={6} key={idx}>
      //             <Button variant="outlined" fullWidth value={status} key={idx}>
      //                {hourTitle[status]}
      //             </Button>
      //          </Grid>
      //       ))}
      //    </Grid>
      // )
   };
   const handleChange = (event) => {

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
            region: "Hồ Chí Minh",
            district: "Quận 10",
            ward: "Phường 13",
            address: "270 Lý Thường Kiệt",
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

      const newDate = dayjs(date).add(7, 'hour');
      setTimeValue(newDate);
      setValues({
         ...values,
         reservationDate: newDate.format(),
         reservationHour: {},
      });
   };


   const handleSaveChanges = async (event) => {
      event.preventDefault();
      if (values.userName && values.phoneNumber && values.species && values.weight && values.breed && values.locationType && values.ward && values.address && values.serviceType) {
         if (userSlice.id) {
            setShowConfirmation(true);
         }
         else {
            setOpenModal(true);
         }
      }
      else {
         // if any required field is empty, show an error message
         alert("Please fill in all required fields");
      };

   }
   const handleConfirmationClose = async (confirmed) => {
      // This function is called when the confirmation box is closed
      // It handles the user's choice
      setShowConfirmation(false)
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

         try {
            const { data } = await createReservationMutation({
               variables: { reservation: input },
            })
            if (data){
               alert("The reservation is booked successfully");

            Router.push("/");
            }
            else{
               alert("Unexpected fail");
            }
            

         }
         catch (error) {
            console.log(error);
            throw error;
         }
      }
   };
   const [formState, setFormState] = useState(1)
   const [openModal, setOpenModal] = useState(false)

   const setSignIn = () => {
      setFormState(1)
   }

   const setSignUp = () => {
      setFormState(2)
   }

   const setResetPassword = () => {
      setFormState(3)
   }

   const props = {
      setSignIn,
      setSignUp,
      setResetPassword,
      callback: () => {
         setOpenModal(false)
      },
   }
   return (
      <div className="wrapper">
         <Box mx="auto" width="75%">
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
                              onChange={(e) => {
                                 setValues({
                                    ...values,
                                    species: e.target.value,
                                    breed: "",
                                    weight: "",
                                    serviceType: "",
                                 })
                              }}
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
                        <FormControl sx={{ width: "100%" }}>
                           <InputLabel id="select-autowidth-label">Province/City *</InputLabel>
                           <Select
                              labelId="select-autowidth-label"
                              name="region"
                              value={values.regionId}
                              onChange={(e) => {
                                 const regionId = Number(e.target.value)
                                 const res = listRegion.find(region => region.ProvinceID === regionId)
                                 setValues({
                                    ...values,
                                    regionId: regionId,
                                    region: res.ProvinceName,
                                    district: '',
                                    districtId: '',
                                    ward: '',
                                    wardId: '',
                                 })
                                 handleSelectRegion(regionId, setValues)
                              }}
                              label="region"
                              required
                              variant="outlined"
                           >
                              {listRegion.map((region, index) => {
                                 return <MenuItem value={region.ProvinceID} key={index}>
                                    {region.ProvinceName}
                                 </MenuItem>
                              })}
                           </Select>
                        </FormControl>
                     </Grid>

                     <Grid item md={6} xs={12} style={{ display: values.locationType === "HOME" ? "block" : "none" }}>
                        <FormControl sx={{ width: "100%" }}>
                           <InputLabel id="select-autowidth-label">District *</InputLabel>
                           <Select
                              labelId="select-autowidth-label"
                              name="district"
                              value={values.districtId}
                              onChange={(e) => {
                                 const districtId = Number(e.target.value)
                                 const res = listDistrict.find(district => district.DistrictID === districtId)
                                 handleSelectDistrict(districtId, setValues)
                                 setValues({
                                    ...values,
                                    districtId: districtId,
                                    district: res.DistrictName,
                                    ward: '',
                                    wardId: '',
                                 })
                              }}
                              label="district"
                              required
                              variant="outlined"
                           >
                              {values.region && listDistrict.map((district, index) => {
                                 return <MenuItem value={district.DistrictID} key={index}>
                                    {district.DistrictName}
                                 </MenuItem>
                              })}
                           </Select>
                        </FormControl>
                     </Grid>
                     <Grid item md={6} xs={12} style={{ display: values.locationType === "HOME" ? "block" : "none" }}>
                        <FormControl sx={{ width: "100%" }}>
                           <InputLabel id="select-autowidth-label">Ward *</InputLabel>
                           <Select
                              labelId="select-autowidth-label"
                              name="ward"
                              value={values.wardId}
                              onChange={(e) => {
                                 const res = listWard.find(ward => ward.WardCode === e.target.value)
                                 setValues({
                                    ...values,
                                    wardId: e.target.value,
                                    ward: res.WardName,
                                 })
                              }}
                              label="ward"
                              required
                              variant="outlined"
                           >
                              {values.district && listWard.map((ward, index) => {
                                 return <MenuItem value={ward.WardCode} key={index}>
                                    {ward.WardName}
                                 </MenuItem>
                              })}
                           </Select>
                        </FormControl>
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

                     {values.species && (<Grid item md={12} xs={12}>
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
                        {values.serviceType.description && (
                           <Typography variant="subtitle1" sx={{ mt: 2, ml: 2 }}>
                              Description: {values.serviceType.description}
                           </Typography>
                        )}
                     </Grid>)}


                     <Grid item xs={12} sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                           <DatePicker
                              fullWidth
                              label="Date *"
                              name="reservationDate"
                              value={timeValue}
                              onChange={handleDateChange}
                              minDate={dayjs(minDate)}
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

         <div
            className="absolute-form"
            onClick={(e) => {
               if (e.target.className.includes('absolute-form')) {
                  setOpenModal(false)
               }
            }}
            style={openModal ? { opacity: 1, visibility: 'visible' } : { opacity: 0, visibility: 'hidden' }}
         >
            {formState === 1 && <SignInForm {...props} />}
            {formState === 2 && <SignUpForm {...props} />}
         </div>
         <style jsx>{styles}</style>
      </div >

   );
};

export default ReservationForm;
