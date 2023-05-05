import Slider from 'react-slick'
import styles from './styles'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const CustomNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className="next-arrow" onClick={onClick}>
      <BsArrowRight fontSize={40} />
      <style jsx>{styles}</style>
    </div>
  )
}

const CustomPrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className="prev-arrow" onClick={onClick}>
      <BsArrowLeft fontSize={40} />
      <style jsx>{styles}</style>
    </div>
  )
}

const HeaderServiceBanner = () => {
  const banners = [
    { id: 1, src: '/banners/service1.PNG' },
    { id: 2, src: '/banners/service2.PNG' },
    { id: 3, src: '/banners/service3.PNG' }
  ]

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    lazyLoad: true,

    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
        {banners.map((banner) => {
          return (
            <div key={banner.id}>
              <a href="/services/form">
                <div
                  style={{ backgroundImage: `url(${banner.src})`, backgroundSize: 'cover' }}
                  className="background"
                ></div>
              </a>
            </div>
          )
        })}
      </Slider>
      <style jsx>{styles}</style>
    </>
  )
}

export default HeaderServiceBanner
