import css from 'styled-jsx/css'

export default css`
  /* @import url('https://use.typekit.net/vib8pxz.css'); */
  .elementor-column {
    display: flex;
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;

    .elementor-column-wrapper {
      width: 100%;
      padding: 20px;
      display: flex;
      .woocommerce {
        width: 100%;
        .woocommerce-result-count {
          color: #222222;
          margin: 0 0 1rem;
          float: left;
        }
        .woocommerce-ordering {
          margin-bottom: 2.5rem;
          float: right;
          vertical-align: top;

          .select-order {
            width: 250px;
            padding: 10px 8px;
            margin-right: 10px;
            color: #666;
            background: #fafafa;
            border-radius: 5px;
            border: 1px solid #eaeaea;
            outline: none;
          }
        }
        .products {
          /* important */
          margin-top: 6.5rem;
          /* important */
          padding-left: 0;

          display: grid;
          grid-row-gap: 30px;
          grid-column-gap: 30px;
          grid-template-columns: repeat(3, minmax(0, 1fr));

          .product {
            display: block;
            justify-self: center;
            text-align: center;
            padding: 15px;
            max-width: 450px;

            box-shadow: 0px 0px 10px -8px rgb(0 0 0 / 50%);
            border: 1px solid #efefef;
            border-radius: 15px;

            transition: all 0.2s ease-in-out;
            cursor: pointer;

            .product-img {
            }
            .product-detail {
              width: 100%;
              text-align: center;
              font-family: 'Montserrat', sans-serif;
              font-weight: 600;
              .product-category {
                color: #222;
                font-size: 0.85rem;
                margin-bottom: 0.5rem;
                display: block;
                line-height: 1.3;
                opacity: 0.6;
              }
              .product-link {
                color: #333;
                text-decoration: none;

                padding: 0;
                font-size: 0.7rem;
                h2 {
                  /* overflow: hidden; */
                  /* text-overflow: ellipsis; */
                  /* white-space: nowrap; */
                  margin: 0;
                  margin-bottom: 8px;
                }
              }
              .price {
                width: 100%;
                font-size: 18px;
                font-weight: 700px;
                color: #273172;
                margin-bottom: 0.5rem;
                line-height: 1.3;
                cursor: text;
                span {
                  text-decoration: underline;
                }
              }
            }

            &:hover {
              box-shadow: 1px -1px 15px 7px rgba(18, 2, 2, 0.3);
              -webkit-box-shadow: 1px -1px 15px 7px rgba(18, 2, 2, 0.3);
              -moz-box-shadow: 1px -1px 15px 7px rgba(18, 2, 2, 0.3);
            }
          }
        }
        .woocommerce-pagination {
          margin-top: 30px;
          margin-left: 30px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          ul {
            padding: 0;
          }
          .page-number {
            display: block;
            margin: 0 5px 5px 0;
            /* padding: 15px; */
            float: left;
            overflow: hidden;
            a,
            span {
              text-align: center;
              color: #1e73be;
              border: 1px solid #1e73be;
              border-radius: 15px;
              margin: 0;
              text-decoration: none;
              line-height: 1;
              font-size: 1rem;
              font-weight: 400;
              padding: 0.75rem;
              display: block;
              min-width: 2.5rem;
              cursor: pointer;
              transition: all 0.2s ease-in-out;
              &:hover {
                background-color: #1e73be;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
`
