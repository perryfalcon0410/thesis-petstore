import css from 'styled-jsx/css'

export default css`
  .wrapper {
    overflow-y: auto;
    height: 100vh;

    p,
    a {
      margin: 0;
      padding: 0;
      color: #000;
    }

    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 40px;

      p {
        font-size: 32px;
        font-weight: 400;
      }

      a {
        margin-top: 20px;
        font-size: 16px;
        font-weight: 700;
        padding: 15px 19px;
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
`
