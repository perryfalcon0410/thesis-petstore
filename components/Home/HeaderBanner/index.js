import Slider from 'react-slick'
import styles from './styles'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const CustomNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className="next-arrow" onClick={onClick}>
      <BsArrowRight fontSize={20} />
      <style jsx>{styles}</style>
    </div>
  )
}

const CustomPrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className="prev-arrow" onClick={onClick}>
      <BsArrowLeft fontSize={20} />
      <style jsx>{styles}</style>
    </div>
  )
}

const HeaderBanner = () => {
  const banners = [
    { id: 1, src: '/banners/image3.jpg' },
    { id: 2, src: '/banners/image2.jpg' },
    { id: 3, src: '/banners/image4.jpg' },
    { id: 4, src: '/banners/image1.png' },
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
              <div
                style={{ backgroundImage: `url(${banner.src})`, backgroundSize: 'cover' }}
                className="background"
              ></div>
            </div>
          )
        })}
      </Slider>
      <style jsx>{styles}</style>
    </>
  )
}

export default HeaderBanner
