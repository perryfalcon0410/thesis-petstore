import css from 'styled-jsx/css'

export default css`
  .wrapper {
    height: 100vh;
    overflow-y: auto;

    .round-layer {
      background: #051342;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    .relative {
      display: relative;
    }
  }

  .form-wrapper {
    width: 300px;
    margin: auto;
    position: relative;
    top: 50%;
    left: 20%;
    transform: translateY(-50%);
    border-radius: 4px;

    .icon-lg {
      width: 128px;
      margin: 0 auto;
    }

    .form-container {
      .input {
        margin-top: 20px;
        position: relative;

        &:first-child {
          margin-top: 0;
        }

        .icon-sm {
          width: 24px;
          height: 24px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 8px;
        }

        input {
          width: 100%;
          outline: none !important;
          padding: 8px 4px 8px 44px;
          background: transparent;
          border: 1px solid #fff;
          color: #000000;
          font-weight: 100;
          font-size: 16px;
          line-height: 24px;
          border-radius: 5px;

          &::placeholder {
            color: #666;
          }
        }
      }

      .error {
        color: red;
        margin-top: 8px;
      }

      .reset-password {
        margin-top: 10px;

        a {
          text-decoration: none;
          color: #000000;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .form-event {
      margin-top: 40px;

      .button {
        width: 100%;
        padding: 11px 15px;
        color: #c58725;
        font-size: 16px;
        lineheight: 20px;
        font-weight: bold;
        border: 1px solid white;
        transition: all 0.3s;
        border-radius: 5px;

        cursor: pointer;

        &:hover {
          background: #c58725;
          color: #ffffff;
        }

        &:active {
          transform: scale(0.95);
        }
      }

      .sign-up {
        margin-top: 16px;
        color: #000000;

        a {
          text-decoration: none;
          font-weight: 700;
          color: #000000;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`
