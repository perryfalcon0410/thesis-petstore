import css from 'styled-jsx/css'

export default css`
  .background {
    width: 100%;
    height: 400px;
  }
  .next-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    right: -1px;
    position: absolute;
    top: 50%;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 10px;
    transform: translate(0, -50%);
    cursor: pointer;
    z-index: 3;
    background-color: white;
    border: 1px solid rgb(231, 232, 233);
    box-shadow: rgb(16 25 40 / 10%) 0px 4px 6px 0px;
    transition: border-color 300ms ease 0s, opacity 100ms ease-in-out 0s;
    border-radius: 5px;
  }
  .prev-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    left: -1px;
    margin-left: 10px;
    position: absolute;
    top: 50%;
    width: 40px;
    height: 40px;
    transform: translate(0, -50%);
    cursor: pointer;
    z-index: 3;
    background-color: white;
    border: 1px solid rgb(231, 232, 233);
    box-shadow: rgb(16 25 40 / 10%) 0px 4px 6px 0px;
    transition: border-color 300ms ease 0s, opacity 100ms ease-in-out 0s;
    border-radius: 5px;
  }
`
