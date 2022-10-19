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

        table {
          width: 100%;
          border-bottom: 1px solid #ececec;
        }

        th {
          padding: 5px;
          text-align: left;
          border-bottom: 2px solid #ececec;
          font-size: 18px;
          line-height: 1.05;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          display: table-cell;
          vertical-align: inherit;
          font-weight: bold;
          border-width: 3px;
          color: #777;
          font-family: 'Raleway', sans-serif;

          &:last-child {
            text-align: right;
          }
        }

        td {
          padding: 20px 4px;
          color: #666;
          font-size: 16px;
          line-height: 1.3;
          font-family: 'Raleway', sans-serif;

          .remove {
            display: flex;
            align-items: center;
            cursor: pointer;
            color: #ccc;
          }

          &.product-name {
            max-width: 180px;
          }

          &.product-quantity {
            div {
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .sub {
              border-right: 0 !important;
              border-top-right-radius: 0 !important;
              border-bottom-right-radius: 0 !important;
            }

            .add {
              border-left: 0 !important;
              border-top-left-radius: 0 !important;
              border-bottom-left-radius: 0 !important;
            }

            .sub,
            .add {
              background-color: rgba(0, 0, 0, 0.03);
              -webkit-box-shadow: none;
              box-shadow: none;
              border-color: rgba(0, 0, 0, 0.09);
              color: currentColor !important;
              border-radius: 99px;
              border: 1px solid #ddd;
              text-transform: none;
              font-weight: normal;
              text-shadow: 1px 1px 1px #fff;
              font-size: 16px;
              padding: 0.5em;
              height: 40px;
              display: flex;
              align-items: center;
              color: #666;
              cursor: pointer;
            }

            input[type='number'] {
              max-width: 2.5em;
              width: 2.5em;
              box-shadow: none;
              background-color: rgba(0, 0, 0, 0.03);
              border: 1px solid #ddd !important;
              height: 40px;
              text-align: center;
              font-size: 16px;
              color: #666;

              &:focus {
                outline: none;
              }
            }

            /* Chrome, Safari, Edge, Opera */
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }

            /* Firefox */
            input[type='number'] {
              -moz-appearance: textfield;
            }
          }

          &.product-price,
          &.product-subtotal {
            span {
              font-weight: bold;
              color: #111;
              white-space: nowrap;
              font-family: 'Raleway', sans-serif;
            }
          }

          &:last-child {
            text-align: right;
          }
        }

        .product-path {
          text-decoration: none;
          padding-top: 20px;
          display: block;
          width: fit-content;
          font-weight: bold;
          text-transform: uppercase;

          .go-back {
            display: flex;
            align-items: center;
            padding: 12px 20px;
            color: white;
            background: #ffa6a8;
            border: 2px solid white;
            transition: border 0.3s, background 0.3s, color 0.3s;

            .back {
              margin-right: 12px;
            }
          }

          &:hover {
            .go-back {
              border-color: #ffa6a8;
              background: white;
              color: #ffa6a8;
            }
          }
        }
      }

      .col-large-5 {
        border-left: 3px solid #ececec;
        padding: 0 20px 30px;
        max-width: 41.6666666667%;
        flex-basis: 41.6666666667%;

        .title {
          padding: 5px;
          text-align: left;
          border-bottom: 2px solid #ececec;
          font-size: 18px;
          line-height: 1.05;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          display: table-cell;
          vertical-align: inherit;
          font-weight: bold;
          border-width: 3px;
          color: #777;
          font-family: 'Raleway', sans-serif;
          display: flex;
        }

        .inner-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          border-bottom: 1px solid #ececec;

          &:last-child {
            border-bottom: 3px solid #ececec;
          }

          .subtotal,
          .shipping,
          .total {
            font-size: 18px;
            font-family: 'Raleway', sans-serif;
          }

          .price,
          .method,
          .destination {
            text-align: right;
            font-family: 'Raleway', sans-serif;
          }

          .price {
            font-weight: bold;
            color: #111;
          }

          .destination {
            margin-top: 20px;
          }
        }

        .continue {
          margin-bottom: 30px;
        }

        .continue,
        .voucher-apply {
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          cursor: pointer;
          margin-top: 30px;
          background: #ffa6a8;
          color: white;
          border: 2px solid white;
          transition: background 0.3s, color 0.3s, border 0.3s;
          font-family: 'Raleway', sans-serif;
          font-size: 18px;
          font-weight: bold;
          line-height: 1.5;

          &:hover {
            color: #ffa6a8;
            border-color: #ffa6a8;
            background: white;
          }
        }

        .voucher-title {
          display: flex;
          border-bottom: 3px solid #ececec;
          color: #888;
          font-weight: bold;
          align-items: center;
          margin-bottom: 15px;
          padding-bottom: 10px;

          .tag {
            transform: rotate(90deg);
            margin-right: 8px;
          }

          p {
            font-size: 18px;
          }
        }

        .voucher-input {
          border: 1px solid #ddd;
          padding: 0 0.75em;
          height: 40px;
          font-size: 16px;
          width: 100%;

          &:focus {
            border: 1px solid #ddd;
            outline: none;
          }
        }
      }
    }
  }
`
