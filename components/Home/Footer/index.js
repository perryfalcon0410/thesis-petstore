import React from 'react'
import styles from './styles'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="container">
      <div className="brand-container">
        <div className="brand-logo">
          <Image
            className="logo"
            src="/images/logo-white.svg"
            alt="companyLogo"
            width={300}
            height={80}
            objectFit={'contain'}
          />
        </div>
        <div className="brand-desc">
          ra đời với mong muốn mang lại cho khách hàng sự chuyên nghiệp, uy tín mang nét đẹp hoa mỹ mà chúng tôi đem lại
          sự trải nghiệm tốt nhất cho thú cưng của chúng ta. Với nhiều năm kinh nghiệm trong ngành dịch vụ thú cưng bao
          gồm: Spa thú cưng, Khách sạn thú cưng, Dịch vụ thú cưng tại nhà,…
        </div>
        <div className="brand-address">
          <Image src="/icons/Address.svg" alt="address" height={40} width={40} objectFit="contain" />
          <p>Add: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.</p>
        </div>
        <div className="brand-phone">
          <Image src="/icons/Phone.svg" alt="address" height={40} width={40} objectFit="contain" />
          <p>Add: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.</p>
        </div>
        <div className="brand-email">
          <Image src="/icons/Mail.svg" alt="address" height={40} width={40} objectFit="contain" />
          <p>Add: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.</p>
        </div>
      </div>
      <div className="information-container">
        <div className="information-title">
          <h1>Information</h1>
        </div>
        <div className="about-us">
          <a href="">About us</a>
        </div>
        <div className="about-us">
          <a href="">Contact us</a>
        </div>
        <div className="about-us"><a href="">Location</a></div>
        <div className="about-us"><a href="">Our Guarantee</a></div>
      </div>
      <div className="service-container">
        <div className="service-title">
          <h1>Our services</h1>
        </div>
        <div className="about-us">
          <a href="">About us</a>
        </div>
        <div className="about-us">
          <a href="">About us</a>
        </div>
        <div className="about-us">
          <a href="">About us</a>
        </div>
        <div className="about-us">
          <a href="">About us</a>
        </div>
      </div>
      <div className="other-container">
        <div className="other-title">
          <h1>Other information</h1>
        </div>
        <div className="about-us">
          <a href="">About us</a>
        </div>
        <div className="about-us">
          <a href="">About us</a>
        </div>
        <div className="about-us">
          <a href="">About us</a>
        </div>
        <div className="about-us">
          <a href="">About us</a>
        </div>
      </div>
      <style jsx>{styles}</style>
    </footer>
  )
}

export default Footer
