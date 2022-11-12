import css from 'styled-jsx/css'
export default css`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1.title {
    font-family: Ubuntu;
    font-size: 32px;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-top: 32px;
  }
  .desc {
    font-size: 24px;
    margin-top: 12px;
    color: #444;
    text-align: center;
    color: #796d6d;
  }
  .featured-products {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`
