import css from 'styled-jsx/css'

export default css`
  .material-icons-outlined {
    font-family: 'Material Icons';
  }

  a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
  }

  .container {
    max-width: 1140px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;

    .product-single-detail {
      margin-top: 90px;

      p {
        font-family: 'Raleway', sans-serif;
        font-size: 15px;
        margin-bottom: 1rem;
        line-height: 1.5;
      }

      .product_detail {
        padding-top: 20px;
        padding-bottom: 10px;

        &.row {
          display: flex;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px;
        }

        .col-md-6 {
          position: relative;
          flex: 0 0 50%;

          width: 100%;
          max-width: 50%;
          padding-right: 15px;
          padding-left: 15px;

          &.content-product {
            margin-bottom: 40px;

            h2 {
              font-family: 'Raleway', sans-serif;
              font-size: 32px;
              font-weight: 600;
              margin: 0;
              margin-bottom: 10px;
            }

            .star-review {
              display: flex;
              margin-bottom: 10px;
              padding: 10px 0 20px 0;

              .stars {
                font-size: 20px;
                color: #faa7a3;
              }

              p {
                margin: 0px;
                margin-left: 5px;
              }
            }

            .infor-product {
              margin: 40px 0 20px 0;

              div span,
              p span {
                font-family: 'Raleway', sans-serif;
                font-size: 15px;
                font-weight: bold;
                margin-bottom: 1rem;
                line-height: 1.5;
              }
            }

            .btn-group {
              margin-right: 10px;
              margin-top: 15px;
              position: relative;
              display: inline-flex;
              vertical-align: middle;

              .btn {
                display: inline-block;
                font-weight: 400;
                color: #212529;
                text-align: center;
                vertical-align: middle;
                user-select: none;
                cursor: pointer;
                padding: 9.5px 15px;
              }

              button {
                border: 1px solid #999999;
                border-radius: 0;
                font-size: 18px;
              }

              .add-to-cart {
                position: relative;
                padding-right: 70px;
                border: 1px solid #999999;
                border-radius: 0;

                &:hover {
                  color: white;
                  background-color: black;
                }

                &:hover div {
                  background-color: black;
                }
              }

              .add-to-cart div {
                display: flex;
                align-items: center;
                justify-content: center;

                position: absolute;
                right: 0;
                top: 0;
                bottom: 0;

                width: 40px;
                height: 100%;
                background-color: #999999;
              }

              .prev,
              .show-number,
              .next {
                padding: 0 15px;
                background: none;
                line-height: 1;
                width: 40px;
                height: 40px;
              }

              .show-number,
              .next {
                margin-left: -1px;
              }

              .prev:hover,
              .next:hover {
                color: white;
                background-color: black;
              }
            }
          }
        }
      }
    }
  }
`
