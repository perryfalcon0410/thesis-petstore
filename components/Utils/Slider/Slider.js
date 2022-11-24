import styles from './styles'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { IMAGE_QUALITY } from 'utils/constant'

const Slider = ({ DynamicWidth, sliderData }) => {
  const [translation, setTranslation] = useState({
    bigImage: { transform: 'translate3d(0px, 0px, 0px)' },
    smallImage: { transform: 'translate3d(0px, 0px, 0px)' },
  })

  useEffect(() => {
    const sliders = document.querySelectorAll('.slides')

    const moveToSlide = (index) => {
      setTranslation({
        bigImage: {
          transform: `translate3d(${index * -DynamicWidth}px, 0px, 0px)`,
        },
        smallImage: { transform: 'translate3d(0px, 0px, 0px)' },
      })
    }

    Array.from(sliders).map((slider, index) => {
      if (index % 2 != 0) {
        const sliderSmallImage = Array.from(slider.children)
        sliderSmallImage.map((slide, idx) => {
          slide.addEventListener('click', () => {
            return moveToSlide(idx)
          })
        })
      }
    })

    return () => {
      setTranslation({
        bigImage: { transform: 'translate3d(0px, 0px, 0px)' },
        smallImage: { transform: 'translate3d(0px, 0px, 0px)' },
      })
      Array.from(sliders).map((slider, index) => {
        if (index % 2 != 0) {
          const sliderSmallImage = Array.from(slider.children)
          sliderSmallImage.map((slide, idx) => {
            slide.removeEventListener('click', () => {
              return moveToSlide(idx)
            })
          })
        }
      })
    }
  }, [DynamicWidth, sliderData])

  return (
    <>
      <div className="flexslider" id="slider">
        <div className="flex-viewport">
          <ul className="slides" style={translation.bigImage}>
            {sliderData.images.length !== 0 ? (
              sliderData.images.map((image, index) => {
                return (
                  <li className="big-image" style={{ width: `${DynamicWidth}px` }} key={index}>
                    <Image
                      src={image.url}
                      alt="Hình ảnh sản phẩm to"
                      width={IMAGE_QUALITY.HIGH}
                      height={IMAGE_QUALITY.HIGH}
                      placeholder="blur"
                      blurDataURL="/products/big-product-1.jpg"
                    />
                  </li>
                )
              })
            ) : (
              <li className="big-image" style={{ width: `${DynamicWidth}px` }}>
                <Image
                  src="/products/big-product-1.jpg"
                  alt="Hình ảnh sản phẩm to"
                  width={IMAGE_QUALITY.HIGH}
                  height={IMAGE_QUALITY.HIGH}
                  objectFit="contain"
                />
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="flexslider" id="carousel">
        <div className="flex-viewport">
          <ul className="slides" style={translation.smallImage}>
            {sliderData.images.length !== 0 ? (
              sliderData.images.map((image, index) => {
                return (
                  <li className="small-image" key={index}>
                    <Image
                      src={image.url}
                      alt="Hình ảnh sản phẩm nhỏ"
                      width={IMAGE_QUALITY.LOW}
                      height={IMAGE_QUALITY.LOW}
                      placeholder="blur"
                      blurDataURL="/products/big-product-1.jpg"
                    />
                  </li>
                )
              })
            ) : (
              <li className="small-image">
                <Image
                  src="/products/big-product-1.jpg"
                  alt="Hình ảnh sản phẩm nhỏ"
                  width={IMAGE_QUALITY.LOW}
                  height={IMAGE_QUALITY.LOW}
                  objectFit="contain"
                />
              </li>
            )}
          </ul>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default Slider
