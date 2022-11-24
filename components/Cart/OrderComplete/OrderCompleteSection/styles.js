import css from 'styled-jsx/css'

export default css`
  p,
  h1,
  h2,
  h3,
  a {
    font-family: 'Raleway', sans-serif;
  }

  .wrapper {
    max-width: 1080px;
    margin: 0 auto;
    padding: 30px 15px;

    .row {
      margin-left: -30px;
      margin-right: -30px;
      margin-bottom: 0;
      display: flex;

      .col-large-7 {
        max-width: 58.33333333%;
        flex-basis: 58.33333333%;
        margin: 0 20px 30px;

        h1 {
          font-size: 32px;
          color: #555;
        }

        .row-header {
          display: flex;
          justify-content: space-between;
          padding-bottom: 8px;
          color: #777;
          font-weight: bold;
          font-size: 20px;
          border-bottom: 3px solid #ececec;
          text-transform: uppercase;
        }

        .row-cell {
          padding: 8px 0;
          border-bottom: 1px solid #ececec;
          display: flex;
          justify-content: space-between;
          font-size: 18px;

          .product {
            max-width: 65%;

            a {
              text-decoration: none;
              color: #777;

              &:hover {
                color: black;
              }
            }
          }

          .sub-total,
          .shipping,
          .shipping-cost,
          .payment-method,
          .total {
            color: #777;
            font-weight: bold;
            width: 50%;
          }

          .sub-price,
          .price {
            color: #000;
            font-weight: bold;
          }
        }
      }

      .col-large-5 {
        padding: 0 30px 30px;
        max-width: 41.6666666667%;
        flex-basis: 41.6666666667%;

        .card {
          box-shadow: 1px 1px 3px 0px rgb(0 0 0 / 20%), 0 1px 0 rgb(0 0 0 / 7%), inset 0 0 0 1px rgb(0 0 0 / 5%);
          padding: 30px;
          background-color: rgba(0, 0, 0, 0.02);
          font-size: 20px;

          .thank-you {
            color: #7a9c59;
            margin-bottom: 16px;
            font-weight: bold;
          }

          .payment-title {
            font-weight: bold;
            font-family: 'Raleway', sans-serif;
            color: #339900;
            margin-bottom: 10px;
          }

          ul {
            padding: 0;
            margin: 0;

            li {
              margin-left: 15px;
              margin-bottom: 16px;
              color: #777;

              span {
                font-weight: bold;
                font-family: 'Raleway', sans-serif;

                &.price {
                  color: #000;
                }
              }
            }
          }
        }
      }
    }
  }
`
