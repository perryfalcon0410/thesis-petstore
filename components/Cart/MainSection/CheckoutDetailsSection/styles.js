import css from 'styled-jsx/css'

export default css`
  .container {
    max-width: 1080px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  .page-wrapper {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .message-wrapper {
    color: #777;
    margin: 0;
    padding-bottom: 0.5em;
  }
  .container .message-container {
    padding-left: 0;
    padding-right: 0;
    display: flex;
    gap: 5px;
  }
  .message-container a {
    margin: 0 15px 0 0;
    color: #334862;
    text-decoration: none;
  }
`
