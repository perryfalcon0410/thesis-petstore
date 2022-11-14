import css from 'styled-jsx/css'

export default css`
  .price-filter-container {
    margin-bottom: 20px;
    width: 100%;
    .price-filter-content {
      transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
      & > h5 {
        padding-bottom: 15px;
        color: #222222;
        margin: 0;
        font-size: 18px;
        line-height: 1.6;
      }
      .price-label {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`
