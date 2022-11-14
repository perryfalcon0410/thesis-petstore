import css from 'styled-jsx/css'
export default css`
  .wrapper {
    width: 100%;
    background: black;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    color: white;
    padding: 20px 64px 40px 64px;
    color: white;
    z-index: -1;
    .brand-logo {
      padding-top: 10px;
      padding-bottom: 10px;
      margin-left: -30px;
    }
    .brand-desc {
      line-height: 20px;
    }
    .brand-container {
      min-width: 30%;
      width: 500px;
      .brand-address {
        display: flex;
        align-items: center;
        padding-top: 20px;
        p {
          padding-left: 10px;
        }
      }
      .brand-phone {
        display: flex;
        align-items: center;
        padding-top: 10px;
        p {
          padding-left: 10px;
        }
      }
      .brand-email {
        display: flex;
        align-items: center;
        padding-top: 10px;
        p {
          padding-left: 10px;
        }
      }
    }
    .information-container {
      margin-left: 120px;
      width: 100%;
      padding-top: 40px;
      display: flex;
      justify-content: space-between;

      .col {
        .col-content {
          display: flex;
          flex-direction: column;

          a {
            text-decoration: none;
            color: #fff;
            margin-top: 24px;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`
