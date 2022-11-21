import { Slider } from '@mui/material'
import { useRouter } from 'next/router'
import styles from './styles'

const FilterPrice = ({ productListData }) => {
  const router = useRouter()
  const { queryParams: query, minPrice, maxPrice } = productListData

  const handleChangePrice = (event, newPrice) => {
    router.replace({
      pathname: '/products',
      query: {
        ...query,
        minPrice: newPrice[0],
        maxPrice: newPrice[1],
      },
    })
  }

  return (
    <div className="price-filter-container">
      <div className="price-filter-content">
        <h5>Filter by price</h5>
        <Slider
          value={[query.minPrice, query.maxPrice]}
          onChange={handleChangePrice}
          valueLabelDisplay="auto"
          max={maxPrice}
          min={minPrice}
        />
        <div className="price-label">
          {'Price: '}
          <span>
            <span className="from" style={{ fontWeight: 700 }}>
              ${query.minPrice}
            </span>
            {' - '}
            <span className="to" style={{ fontWeight: 700 }}>
              ${query.maxPrice}
            </span>
          </span>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default FilterPrice
