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

      & > form {
        .price-slider-container {
          .price-slider-content {
            background-color: #ededed;
            border-radius: 1em;
            border: 0;
            margin-bottom: 1.2em;
            height: 0.2em;
            position: relative;
            margin-left: 0.5em;
            margin-right: 0.5em;

            #min-price,
            #max-price {
              appearance: none;
              width: 100%;
              outline: none;
              position: absolute;
              margin: auto;
              top: 0;
              left: 0;
              bottom: 0;
              background-color: transparent;
              pointer-events: none;

              &::-webkit-slider-thumb {
                -webkit-appearance: none;
                height: 1em;
                width: 1em;
                background-color: #1e73be;
                cursor: pointer;
                border-radius: 1em;
                pointer-events: auto;
                margin-top: -1px;
              }

              /* &:active::-webkit-slider-thumb { */
              /*   background-color: #fff; */
              /*   border: 1px solid #3264fe; */
              /* } */
            }

            .price-ui-slider {
              position: absolute;
              top: 0;
              background-color: #1e73be;
              height: 100%;
            }
          }

          .price-slider-amount {
            display: flex;
            line-height: 2.4;
            font-size: 0.8751em;
            justify-content: space-between;

            & > button {
              font-size: 0.9em;
              padding: 8px 18px;
              border-radius: 2px;
              color: #ffffff;
              border-color: #273172;
              background-color: #273172;
              cursor: pointer;
              text-decoration: none;
              text-transform: uppercase;

              &:hover {
                background-color: #0a0a0a;
              }
            }

            .price-label {
              & > span {
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
`
