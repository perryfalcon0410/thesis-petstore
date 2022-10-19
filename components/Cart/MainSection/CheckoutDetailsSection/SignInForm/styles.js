import css from 'styled-jsx/css'

export default css`
  form {
    margin-bottom: 1.3em;
    p {
      margin-bottom: 0.5em;
    }
  }
  p {
    color: #777;
    margin-top: 0;
  }
  label {
    color: #222;
    font-weight: bold;
    display: block;
    font-size: 0.9em;
    margin-bottom: 0.4em;
  }
  input[type='checkbox'] {
    display: inline;
    margin-right: 10px;
    font-size: 16px;
  }
  [type='checkbox'] {
    box-sizing: border-box;
    padding: 0;
  }
  input {
    margin-bottom: 1em;
  }
  a {
    color: #334862;
    text-decoration: none;
  }
  .form-row-first {
    margin-right: 4%;
    width: 48%;
    float: left;
  }
  .form-row-last {
    width: 48%;
    float: left;
  }
  .woocommerce form .form-row .required {
    visibility: visible;
  }
  .clear {
    &:after {
      content: '';
      display: table;
      clear: both;
      box-sizing: border-box;
    }
  }
  .button {
    color: #fff;
    background-color: #ffa6a8;
    border-color: rgba(0, 0, 0, 0.05);
    margin-bottom: 0;
    position: relative;
    display: inline-block;
    text-transform: uppercase;
    font-size: 0.97em;
    letter-spacing: 0.03em;
    cursor: pointer;
    font-weight: bolder;
    text-align: center;
    text-decoration: none;
    border: 1px solid transparent;
    vertical-align: middle;
    border-radius: 0;
    margin-top: 0;
    margin-right: 1em;
    text-shadow: none;
    line-height: 2.4em;
    min-height: 2.5em;
    padding: 0 1.2em;
    max-width: 100%;
    transition: transform 0.3s, border 0.3s, background 0.3s, box-shadow 0.3s, opacity 0.3s, color 0.3s,
      -webkit-transform 0.3s, -webkit-box-shadow 0.3s;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
  }
  .input-text {
    box-sizing: border-box;
    border: 1px solid #ddd;
    padding: 0 0.75em;
    height: 2.507em;
    font-size: 0.97em;
    border-radius: 0;
    max-width: 100%;
    width: 100%;
    vertical-align: middle;
    background-color: #fff;
    color: #333;
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 10%);
    transition: color 0.3s, border 0.3s, background 0.3s, opacity 0.3s;
  }
`
