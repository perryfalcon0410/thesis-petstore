import css from 'styled-jsx/css'
export default css`
  .container {
    display: flex;
    justify-content: space-between;
    background-color: black;
    color: white;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 40px;
    padding-top: 10px;
    color: white;
    z-index: -1;
    .brand-logo {
      padding-top: 10px;
      padding-bottom: 10px;
      margin-left: -30px;
    }
    .brand-container {
      width: 500px;
      .brand-address {
        display: flex;
        align-items: center;
        padding-top: 10px;
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
      padding-left: 5%;
      padding-right: 5%;
      padding-top: 20px;

      .information-title h1 {
        margin: 0;
      }
      .about-us{
        text-align: center;
        align-items: center;
        padding: 20px;
      }
    }
    .service-container {
      // padding: 5%;
      padding-left: 5%;
      padding-right: 5%;
      padding-top: 20px;
      .service-title h1 {
        margin: 0;
      }
      .about-us{
        text-align: center;
        align-items: center;
        padding: 20px;
      }
    }
    .other-container {
      // padding: 5%;
      padding-left: 5%;
      padding-right: 5%;
      padding-top: 20px;

      .other-title h1 {
        margin: 0;
      }
      .about-us{
        text-align: center;
        align-items: center;
        padding: 20px;
      }
    }
    
  }
`
