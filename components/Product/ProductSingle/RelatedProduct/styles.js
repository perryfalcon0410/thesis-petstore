import css from "styled-jsx/css";

export default css`
  .container {
    max-width: 1140px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    .product-related {
      margin-top: 30px;
      padding-bottom: 50px;
      margin-bottom: 80px;
      border-bottom: 1px solid #e6e6e6;

      .title {
        text-align: center;

        h3 {
          font-family: "El Messiri", sans-serif;
          font-size: 40px;
          margin-bottom: 0;
          position: relative;
        }

        .text-center {
          &:before {
            content: " ";
            position: absolute;
            height: 13px;
            width: 110px;
            display: block;
            left: 50%;
            margin-left: -55px;
            bottom: -10px;
            background: #ffa6a8;
            mask: url(/images/line-title2.svg) repeat left center;
          }
        }
      }

      .product {
        margin-top: 60px;
      }

      .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
      }

      .card-wrapper {
        flex: 0 0 25%;
        max-width: 25%;
      }
    }
  }
`;
