import css from "styled-jsx/css";

export default css`
  .card-wrapper {
    flex: 0 0 25%;
    max-width: 25%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;

    .card {
      border: none;
      border-radius: 0;
      text-align: center;
      margin: 0 0 45px 0;
      position: relative;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;

      .card-img-top {
        margin: 0;
        padding: 0;
        position: relative;
        z-index: 1;
        width: 100%;
        border-top-left-radius: calc(0.25rem - 1px);
        border-top-right-radius: calc(0.25rem - 1px);

        .post-image {
          z-index: -1;
          position: relative;
          width: 100%;
          max-width: 100%;
          display: block;

          ${
            "" /* img {
            height: auto;
            z-index: -2;
            width: 100%;
            vertical-align: middle;
            border-style: none;
          } */
          }

          .icon-product {
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.5);
            position: absolute;
            top: 0;
            left: 0;
            display: none;

            .btn {
              font-family: "Raleway", sans-serif;
              margin-top: 80%;
              padding: 6px 8px 2px 8px;
              background: #ffa6a8;
              border-radius: 50%;
              border: 1px solid transparent;
              font-size: 1rem;
              line-height: 1.5;
              cursor: pointer;
            }

            .btn:not(:last-child) {
              margin-right: 10px;
            }
          }
        }

        .new {
          font-family: "Raleway", sans-serif;
          padding: 7px 15px;
          color: white;
          position: absolute;
          line-height: 1;
          font-size: 16px;
          background: #8ce6ff;
          right: 0;
          top: 3%;
          z-index: 10;
          margin-bottom: 1rem;
        }

        .sale {
          font-family: "Raleway", sans-serif;
          padding: 7px 15px;
          color: white;
          position: absolute;
          line-height: 1;
          font-size: 16px;
          background: #ffa6a8;
          right: 0;
          top: 3%;
          z-index: 10;
          margin-bottom: 1rem;
        }

        .post-image:hover > .icon-product {
          display: block;
          z-index: 10;
        }
      }

      .card-body {
        padding: 0;
        margin-top: 20px;
        flex: 1 1 auto;

        .card-title {
          margin: 0;
          margin-block-start: 1em;
          margin-block-end: 1em;

          a {
            font-family: "Raleway", sans-serif;
            color: #a1a1a1;
            font-size: 15px;
            text-decoration: none;
            background-color: transparent;
          }

          a:hover {
            color: rgba(0, 0, 0, 0.8);
          }
        }

        .product-title {
          margin: 0;
          margin-block-start: 1em;
          margin-block-end: 1em;

          a {
            font-family: "Raleway", sans-serif;
            font-size: 20px;
            font-weight: 600;
            color: #333333;
            margin: 0;
            text-decoration: none;
            background-color: transparent;
          }

          a:hover {
            color: #ffa6a8;
          }
        }

        .price {
          font-family: "Raleway", sans-serif;
          font-size: 25px;
          font-weight: 600;
          color: #ffa6a8;

          span {
            font-family: "Raleway", sans-serif;
            display: block;
          }

          .off {
            margin-right: 20px;
            color: #cccccc;
            text-decoration: line-through;
          }
        }
      }
    }
  }
`;
