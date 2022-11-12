import React from 'react'
import styles from './styles'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const FOOTER_INFO = [
    {
      title: 'Information',
      items: [
        {
          name: 'About us',
          path: '#',
        },
        {
          name: 'Contact us',
          path: '#',
        },
        {
          name: 'Location & Working hours',
          path: '#',
        },
        {
          name: 'Our guarantee',
          path: '#',
        },
      ],
    },
    {
      title: 'Our service',
      items: [
        {
          name: 'About us',
          path: '#',
        },
        {
          name: 'Contact us',
          path: '#',
        },
        {
          name: 'Location & Working hours',
          path: '#',
        },
        {
          name: 'Our guarantee',
          path: '#',
        },
      ],
    },
    {
      title: 'Let us help you',
      items: [
        {
          name: 'About us',
          path: '#',
        },
        {
          name: 'Contact us',
          path: '#',
        },
        {
          name: 'Location & Working hours',
          path: '#',
        },
        {
          name: 'Our guarantee',
          path: '#',
        },
      ],
    },
  ]

  return (
    <div className="wrapper">
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
            Ra đời với mong muốn mang lại cho khách hàng sự chuyên nghiệp, uy tín mang nét đẹp hoa mỹ mà chúng tôi đem
            lại sự trải nghiệm tốt nhất cho thú cưng của chúng ta. Với nhiều năm kinh nghiệm trong ngành dịch vụ thú
            cưng bao gồm: Spa thú cưng, Khách sạn thú cưng, Dịch vụ thú cưng tại nhà,…
          </div>
          <div className="brand-address">
            <Image src="/icons/Address.svg" alt="address" height={40} width={40} objectFit="contain" />
            <p>Add: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.</p>
          </div>
          <div className="brand-phone">
            <Image src="/icons/Phone.svg" alt="address" height={40} width={40} objectFit="contain" />
            <p>Tel: {`(+84)`} 1234567890 </p>
          </div>
          <div className="brand-email">
            <Image src="/icons/Mail.svg" alt="address" height={40} width={40} objectFit="contain" />
            <p>Email: uaalo???@gmail.com</p>
          </div>
        </div>
        <div className="information-container">
          {FOOTER_INFO.map((ele, index) => (
            <div className="col" key={index}>
              <div className="col-content">
                <h1>{ele.title}</h1>
                {ele.items.map((item, idx) => (
                  <Link href={item.path} key={idx}>
                    <a>{item.name}</a>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </footer>
      <style jsx>{styles}</style>
    </div>
  )
}

export default Footer
