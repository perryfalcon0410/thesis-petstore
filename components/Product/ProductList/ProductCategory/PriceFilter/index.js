import { useEffect, useRef, useState } from 'react'
import styles from './styles'

const FilterPrice = () => {
  const minGap = 0,
    minVal = 35000,
    maxVal = 75000
  const sliderOne = useRef(null),
    sliderTwo = useRef(null)
  const sliderOneVal = useRef(null),
    sliderTwoVal = useRef(null)
  const sliderTrack = useRef(null)

  useEffect(() => {
    sliderOne.current.value = minVal
    sliderTwo.current.value = maxVal
    sliderOneVal.current.textContent = minVal
    sliderTwoVal.current.textContent = maxVal
  }, [sliderOne.current, sliderTwo.current, sliderOneVal.current, sliderTwoVal.current])

  const handleSlideOne = () => {
    if (parseInt(sliderTwo.current.value) - parseInt(sliderOne.current.value) <= minGap) {
      sliderOne.current.value = parseInt(sliderTwo.current.value) - minGap
    }
    sliderOneVal.current.textContent = sliderOne.current.value
    fillColor()
  }

  const handleSlideTwo = () => {
    if (parseInt(sliderTwo.current.value) - parseInt(sliderOne.current.value) <= minGap) {
      sliderTwo.current.value = parseInt(sliderOne.current.value) - minGap
    }
    sliderTwoVal.current.textContent = sliderTwo.current.value
    fillColor()
  }

  const fillColor = () => {
    let left =
      ((sliderOne.current.value - sliderOne.current.min) / (sliderOne.current.max - sliderOne.current.min)) * 100
    let right =
      ((sliderTwo.current.value - sliderOne.current.min) / (sliderOne.current.max - sliderOne.current.min)) * 100
    sliderTrack.current.style.left = left + '%'
    sliderTrack.current.style.width = right - left + '%'
  }

  return (
    <div className="price-filter-container">
      <div className="price-filter-content">
        <h5>Filter by price</h5>
        <form action="#" method="GET">
          <div className="price-slider-container">
            <div className="price-slider-content">
              <div className="price-ui-slider" ref={sliderTrack} style={{ left: '0%', width: '100%' }}></div>
              <input
                ref={sliderOne}
                value={sliderOne.current?.value}
                type="range"
                id="min-price"
                min={minVal}
                max={maxVal}
                onInput={handleSlideOne}
              />
              <input
                ref={sliderTwo}
                value={sliderTwo.current?.value}
                type="range"
                id="max-price"
                min={minVal}
                max={maxVal}
                onInput={handleSlideTwo}
              />
            </div>
            <div className="price-slider-amount">
              <button type="submit" className="button">
                Filter
              </button>

              <div className="price-label">
                Price
                <span className="from" ref={sliderOneVal}></span>-<span className="to" ref={sliderTwoVal}></span>
              </div>
            </div>
          </div>
        </form>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default FilterPrice
