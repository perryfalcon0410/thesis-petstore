import css from 'styled-jsx/css'

export default css`
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 10%;
    .title {
      position: relative;
      width: 100%;
      align-items: center;
      text-align: center;
    }
    .title h2 {
      margin: 0;
      padding: 0;
      line-height: 100%;
      font-size: 3rem;
      font-weight: 800;
      margin-top: 0;
    }
    .title p{
      padding :5px;
    }
  }
`
