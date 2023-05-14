import NavBar from 'components/NavBar'
import HeaderServiceBanner from 'components/Service/HeaderServiceBanner'
import MessengerChatBox from 'components/Home/MessengerChatBox'
import Footer from 'components/Utils/Footer'
import styles from './styles'
import ServiceCard from 'components/Home/ServiceCard'
const ServicePage = () => {
   return (
      <div className="container">
         <NavBar />
         <HeaderServiceBanner />
         <h1 className="title">Services</h1>
         <p className="desc">Best services for your pets</p>
         <ServiceCard />
         <MessengerChatBox />
         <Footer />
         <style jsx>{styles}</style>
      </div>
   )
}

export default ServicePage
