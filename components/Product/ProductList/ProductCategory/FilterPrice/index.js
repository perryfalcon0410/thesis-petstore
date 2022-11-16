import { Slider } from '@mui/material'
import { useState } from 'react'
import styles from './styles'

const FilterPrice = ({ minPrice, maxPrice }) => {
  const [price, setPrice] = useState([minPrice, maxPrice])

  const handleChangePrice = (event, newPrice) => {
    setPrice(newPrice)
  }

  return (
    <div className="price-filter-container">
      <div className="price-filter-content">
        <h5>Filter by price</h5>
        <Slider value={price} onChange={handleChangePrice} valueLabelDisplay="auto" max={maxPrice} min={minPrice} />
        <div className="price-label">
          {'Price: '}
          <span>
            <span className="from" style={{ fontWeight: 700 }}>
              ${price[0]}
            </span>
            {' - '}
            <span className="to" style={{ fontWeight: 700 }}>
              ${price[1]}
            </span>
          </span>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default FilterPrice
