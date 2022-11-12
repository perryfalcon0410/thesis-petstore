import React from 'react'
import styles from './styles'
import { useState } from 'react'
import Image from 'next/image'

import back from '../../../public/icons/back.svg'
import next from '../../../public/icons/next.svg'

const Slider = () => {
  const [index, setIndex] = useState(0)
  const images = [
    '/Imgs/img1.jpg',
    '/Imgs/img2.jpg',
    '/Imgs/img3.jpg',
    '/Imgs/img4.jpg',
    '/Imgs/img5.jpg',
    '/Imgs/img6.jpg',
  ]
  const handleDirection = (direction) => {
    if (direction === 'l') {
      setIndex(index !== 0 ? index - 1 : images.length - 1)
    } else if (direction === 'r') {
      setIndex(index !== images.length - 1 ? index + 1 : 0)
    }
  }
  return (
    <div className="container">
      <div className="arrowContainer" style={{ left: 0 }} onClick={() => handleDirection('l')}>
        <Image src={back} alt="leftArrow" layout="fill" objectFit="contain" />
      </div>
      <div className="containerSlider" style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className="imageSlider" key={i}> 
            <Image src={img} alt="" layout="fill" objectFit="fill" />
          </div>
        ))}
      </div>
      <div className="arrowContainer" style={{ right: 0 }} onClick={() => handleDirection('r')}>
        <Image src={next} alt="rightArrow" layout="fill" objectFit="contain" />
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}
export default Slider
