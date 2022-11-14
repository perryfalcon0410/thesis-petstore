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
      title: 'Services',
      items: [
        {
          name: '5 Star Standard Pet Spa',
          path: '#',
        },
        {
          name: 'Pet Bathing Service',
          path: '#',
        },
        {
          name: 'Trimming, Styling Service',
          path: '#',
        },
        {
          name: 'Supply Products, Accessories',
          path: '#',
        },
      ],
    },
    {
      title: 'Pages',
      items: [
        {
          name: 'Homepage',
          path: '#',
        },
        {
          name: 'Products',
          path: '#',
        },
        {
          name: 'Blogs',
          path: '#',
        },
        {
          name: 'Checkout',
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
            Release with the desire to bring customers professionalism, prestige with beautiful beauty, we bring the
            best experience for our pets. With many years of experience in the pet service industry including: Pet Spa,
            Pet Hotel, Pet Home Service, ...
          </div>
          <div className="brand-address">
            <Image src="/icons/Address.svg" alt="address" height={40} width={40} objectFit="contain" />
            <p>Addr: 268 Ly Thuong Kiet Street, Ward 14, District 10, Ho Chi Minh City</p>
          </div>
          <div className="brand-phone">
            <Image src="/icons/Phone.svg" alt="address" height={40} width={40} objectFit="contain" />
            <p>Tel: {`(+84)`} 123456789 </p>
          </div>
          <div className="brand-email">
            <Image src="/icons/Mail.svg" alt="address" height={40} width={40} objectFit="contain" />
            <p>Email: nam.vo@example.com</p>
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
