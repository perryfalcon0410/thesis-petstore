import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Service from 'components/Service'
import NavBar from 'components/NavBar'
import HeaderServiceBanner from 'components/Service/HeaderServiceBanner'
import MessengerChatBox from 'components/Home/MessengerChatBox'
import Footer from 'components/Utils/Footer'
import styles from './styles'
const ServicePage = () => {
   return (
      <div className="container">
         <NavBar />
         <HeaderServiceBanner />

         <MessengerChatBox />
         <Footer />
         <style jsx>{styles}</style>
      </div>
   )
}

export default ServicePage
