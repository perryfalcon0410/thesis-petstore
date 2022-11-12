import css from 'styled-jsx/css'

export default css`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 50px;
    .title {
      position: relative;
      width: 100%;
      align-items: center;
      text-align: center;
    }
    .title h2 {
      font-family: Ubuntu;
      font-size: 32px;
      font-weight: 800;
      margin-top: 20px;
    }
    .title p {
      font-size: 24px;
      margin-top: 12px;
      color: #444;
      text-align: center;
      color: #796d6d;
    }

    .cards-wrapper {
      margin-top: 20px;
      width: 100%;
      flex-wrap: wrap;
      display: flex;
    }
  }
`
