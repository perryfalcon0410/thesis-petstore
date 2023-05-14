import { useEffect, useState } from 'react'

import NavBar from 'components/NavBar'

import MessengerChatBox from 'components/Home/MessengerChatBox'
import Footer from 'components/Utils/Footer'
import styles from './styles'
import { gql, useQuery } from "@apollo/client";
import AccountDetails from "../../components/account/account-details";
import { useSelector } from 'react-redux'
import { Container } from '@mui/material'
const GET_ACCOUNT = gql`
query GetAccount {
  getAccount {
    id
    firstName
    lastName
    email
    phone
    avatar {
      id
      url
    }
  }
}`
const Account = () => {
   const [accountData, setAccountData] = useState("");
   const userSlice = useSelector((state) => state.user);
   const { data } = useQuery(GET_ACCOUNT, {
      uri: process.env.NEXT_PUBLIC_GRAPHQL_BACKEND_URL,
      context: {
         headers: {
            Authorization: `Bearer ${userSlice.token}`,
         },
      },
   });
   useEffect(() => {
      if (data && data.getAccount) {
         setAccountData(data.getAccount);
      }
   }, [data]);



   if (!accountData) {
      return <h1>Loading ...</h1>;
   }
   return (
      <div className="container">
         <NavBar />
         <Container maxWidth={false}>
            <AccountDetails accountDetail={accountData} />
         </Container>

         <MessengerChatBox />
         <Footer />
         <style jsx>{styles}</style>
      </div>
   )
}

export default Account;
