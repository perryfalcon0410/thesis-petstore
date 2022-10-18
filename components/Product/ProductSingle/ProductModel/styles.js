import css from "styled-jsx/css";

export default css`
  .modal-wrapper {
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.2);

    transition: opacity 0.15s linear, z-index 0.5s;

    .modal-container {
      width: 100%;
      max-width: 960px;
      border-radius: 5px;
      padding: 0 15px;
      margin: 0 auto;
      background-color: #fff;
      z-index: 3;
      position: relative;
    }
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
  }
`;
