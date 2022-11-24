import css from 'styled-jsx/css'

export default css`
  p,
  h1,
  h2,
  h3,
  a {
    font-family: 'Raleway', sans-serif;
  }
  .cart-wrapper {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100vh;
  }
  .page-title {
    position: relative;
    min-height: 60px;
    max-width: 1080px;
    margin: 0 auto;

    .container {
      padding-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 15px;
      padding-right: 15px;

      .row {
        display: flex;
        align-items: center;
      }

      .path {
        cursor: pointer;
        line-height: 1.2;
        text-transform: uppercase;
        font-size: 1.6em;
        color: #666;
        font-weight: 500;

        &:hover {
          color: #ffa6a8;
        }
      }

      .current {
        color: #ffa6a8;
      }

      .arrow {
        color: #666;
        font-size: 18px;
        margin: 0 10px;
      }
    }
  }

  .back-button {
    text-decoration: none;
    color: white;
    background: #ffa6a8;
    padding: 16px 20px;
    font-size: 20px;
    font-weight: 700;
    border: 1px solid white;

    &:hover {
      background: white;
      color: #ffa6a8;
      border-color: #ffa6a8;
    }
  }
`
