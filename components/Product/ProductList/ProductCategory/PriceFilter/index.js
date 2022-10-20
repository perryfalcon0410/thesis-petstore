import styles from './styles'

const FilterPrice = () => {
  return (
    <div className="price-filter-container">
      <div className="price-filter-content">
        <h5>Filter by price</h5>
        <form action="#" method="GET">
          <div className="price-slider-container">
            <div className="price-slider-content">
              {/* left + width == 100% */}
              <div className="price-ui-slider" style={{ left: '1%', width: '50%' }}></div>
              <span style={{ left: '1%' }}></span>
              <span style={{ left: '50%' }}></span>
            </div>
            <div className="price-slider-amount">
              {/* <input type="text" id="min_price" name="min_price" data-min="15000" placeholder="Giá thấp nhất" /> */}
              {/* <input type="range" id="max_price" name="max_price" data-max="1089000" placeholder="Giá cao nhất" /> */}
              <button type="submit" className="button">
                Filter
              </button>

              <div className="price-label">
                Price
                <span className="from"> 50.000 ₫ </span>-<span className="to"> 391.600 ₫ </span>
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
