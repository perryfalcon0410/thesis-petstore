// import css from 'styled-jsx/css'
// export default css`
//   ::-webkit-scrollbar {
//     display: none;
//   }
//   .containter {
//     width: 22%;
//     padding: 5px;
//     display: flex;
//     left: 10%;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     padding: 20px 40px;
//     cursor: pointer;
//     text-align: center;
//     z-index: 20;
//     :hover {
//       box-shadow: 0px 27px 20px -20px rgba(0, 0, 0, 0.2);
//       transform: translate(0px, -10px) scale(1.2);
//     }
//   }
//   .title {
//     font-size: 18px;
//     font-weight: bold;
//     justify-content: center;
//     align-items: center;
//     display: flex;
//     color: #d1411e;
//   }
//   .price {
//     display: flex;
//     position: relative;
//     font-size: 18px;
//     font-weight: bold;
//     justify-content: center;

//     color: #666;
//   }
//   .containter:hover {
//     box-shadow: inset 100px 0 0 0 #54b3d6;
//     color: white;
//   }
// `
import css from 'styled-jsx/css'

export default css`
  /* @import url('https://use.typekit.net/vib8pxz.css'); */
  .elementor-column {
    display: flex;
    width: 100%;
    min-width: 50%;
    max-width: 100;
    height: 100%;
    .elementor-column-wrapper {
      width: 100%;
      padding: 5%;
      display: flex;
      .woocommerce {
        width: 100%;
        .products {
          /* important */
          margin-top: 2rem;
          /* important */
          padding-left: 0;

          /* display: grid; */
          /* grid-row-gap: 20px; */
          /* grid-column-gap: 20px; */
          /* grid-template-columns: repeat(3, minmax(0, 1fr)); */

          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          .product {
            display: block;
            height: 100%;
            justify-self: center;
            text-align: center;
            padding: 15px;
            margin-bottom: 0.8rem;
            max-width: 450px;

            box-shadow: 0px 0px 10px -8px rgb(0 0 0 / 50%);
            border: 1px solid #efefef;
            border-radius: 15px;

            flex: 1;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 10;
            margin: 10px;
            transition: all 0.2s ease-in-out;
            cursor: pointer;
            .product-img {
              position: relative;
              img {
                width: 350px;
                height: 350px;
                object-fit: cover;
                margin-bottom: 0.6rem;
              }
              span {
                position: absolute;
                bottom: 1.5rem;
                left: 1rem;
                right: 1rem;
                padding: 1rem 0;
                background-color: #ffffffef;
                text-transform: uppercase;
                font-weight: 700;
                color: #1b73eb;
                transition: all 0.2s ease-in-out;
                &:hover {
                  cursor: pointer;
                  color: #0a0a0a;
                }
              }
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
      }
    }
  }
`
