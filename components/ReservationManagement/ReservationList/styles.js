import css from 'styled-jsx/css'

export default css`
  .wrapper {
    padding: 40px 64px;
    max-width: 1200px;
    margin: auto;

    .nav-container {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .status-container {
        width: 100%;
        padding: 11px 15px;
        text-align: center;
        cursor: pointer;
        border-bottom: 3px solid white;
        transition: border-color 0.3s;

        .status {
          text-transform: capitalize;
        }

        &:hover {
          border-color: #244bc5;
        }
      }

      .active {
        font-weight: 700;
        border-color: #244bc5;
      }
    }

    .search-container {
      position: relative;
      width: 100%;
      display: flex;
      padding: 20px 0;

      .search-icon {
        position: absolute;
        top: 20px;
        padding: 8px;
        height: 32px;
      }

      input {
        width: 100%;
        padding: 4px 11px;
        padding-left: 36px;
        height: 32px;
        color: #000000d9;
        font-size: 14px;
        line-height: 1.5715;
        background-color: white;
        background-image: none;
        border: 1px solid #d9d9d9;
        border-radius-top-left: 2px;
        border-radius-bottom-left: 2px;
        border-right: none !important;
        transition: all 0.3s;
        outline: none;

        &::placeholder {
          color: #bbb;
        }

        &:hover {
          border-color: #40a9ff;
        }

        &:active {
          border-color: #096dd9;
        }

        &:focus {
          border-color: #096dd9;
          box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
        }
      }

      .search-button {
        font-size: 14px;
        line-height: 1;
        vertical-align: middle;
        padding: 8px 15px;
        color: #fff;
        border-color: #1890ff;
        background: #1890ff;
        cursor: pointer;
        border: 1px solid #1890ff;
        border-radius-top-right: 2px;
        border-radius-bottom-right: 2px;
        transition: all 0.3s;

        &:hover {
          background-color: #40a9ff;
          border-color: #40a9ff;
        }

        &:active {
          background-color: #096dd9;
          border-color: #096dd9;
        }
      }
    }

    .order-container {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      width: 100%;
      row-gap: 20px;

      .card {
        border: 1px solid #eaeaea;
        border-radius: 4px;
      }

      .divider {
        width: 100%;
        height: 1px;
        background: #eaeaea;
      }

      .top {
        width: 100%;
        padding: 8px 32px;

        .status {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          column-gap: 4px;
          padding-bottom: 8px;

          .column-divider {
            background: #eaeaea;
            width: 1px;
            height: 20px;
            margin: 0 6px;
          }
        }

        .product {
          display: flex;
          justify-content: space-between;
          padding: 20px 0;
          align-items: center;

          p {
            font-size: 16px;
          }

          .info-container {
            display: flex;
            column-gap: 8px;

            .image {
              border-radius: 20px;
              width: 104px;
              height: 104px;
            }

            .info {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              max-width: 70%;
            }
          }

          .cost {
            color: #dd583b;
          }
        }
      }

      .bottom {
        padding: 16px 32px;
        text-align: right;

        a {
          display: block;
          width: max-content;
          margin-left: auto;
          margin-top: 10px;
          font-size: 16px;
          font-weight: 700;
          padding: 11px 32px;
          color: white;
          background: #dd583b;
          border: 1px solid #fff;
          text-decoration: none;
          border-radius: 4px;
          transition: background 0.3s, border 0.3s, color 0.3s;

          &:hover {
            color: #dd583b;
            border-color: #dd583b;
            background: white;
          }
        }
      }
    }
  }
`
