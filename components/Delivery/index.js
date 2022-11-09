import styles from './styles'
import NavBar from 'components/NavBar'
import Link from 'next/link'

const Delivery = () => {
  return (
    <div className="delivery-container">
      <NavBar/>
      <img src="/images/scooter_1.gif" alt="scooter"/>
      <h1>We are on our way ...</h1> 
      <style jsx>{styles}</style>
    </div>
  )
}

export default Delivery
