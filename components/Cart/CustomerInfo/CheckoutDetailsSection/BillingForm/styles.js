import css from 'styled-jsx/css'

export default css`
  form {
    margin-bottom: 1.3em;
    p {
      margin-bottom: 0.5em;
    }
  }
  update_totals_on_change p {
    margin-top: 0;
  }
  label {
    color: #222;

    font-weight: bold;
    display: block;
    font-size: 0.9em;
    margin-bottom: 0.4em;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: none;
  }
  select,
  input[type='email'],
  input[type='date'],
  input[type='search'],
  input[type='number'],
  input[type='text'],
  input[type='tel'],
  input[type='url'],
  input[type='password'],
  textarea {
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
  input[type='text'] {
    appearance: none;
  }
  input[type='checkbox'] {
    display: inline;
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 0.5em;
  }
  input[type='checkbox'],
  input[type='radio'] {
    display: inline;
    margin-right: 10px;
    font-size: 16px;
  }
  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  .button,
  button,
  input,
  textarea,
  select,
  fieldset {
    margin-bottom: 1em;
  }
  .button,
  button,
  input[type='submit'],
  input[type='reset'],
  input[type='button'] {
    position: relative;
    display: inline-block;
    background-color: transparent;
    text-transform: uppercase;
    font-size: 0.97em;
    letter-spacing: 0.03em;
    cursor: pointer;
    font-weight: bolder;
    text-align: center;
    color: currentColor;
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
    transition: transform 0.3s, border 0.3s, background 0.3s, box-shadow 0.3s, opacity 0.3s, color 0.3s;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
  }
  .button,
  input[type='submit'],
  input[type='submit'].button,
  input[type='reset'].button,
  input[type='button'].button {
    color: #fff;
    background-color: #446084;
    background-color: var(--primary-color);
    border-color: rgba(0, 0, 0, 0.05);
  }
  input {
    overflow: visible;
  }
  input[type='checkbox'] + label,
  input[type='radio'] + label {
    display: inline;
  }
  textarea {
    margin-bottom: 1em;
    padding-top: 0.7em;
    min-height: 120px;
  }
  select {
    box-shadow: inset 0 -1.4em 1em 0 rgb(0 0 0 / 2%);
    background-color: #fff;
    background-image: url('/arrow-down-icon.svg');
    background-position: right 0.45em top 50%;
    background-repeat: no-repeat;
    padding-right: 1.4em;
    background-size: auto 16px;
    border-radius: 0;
    display: block;
    margin-bottom: 1em;
    text-transform: none;
  }
  option {
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
    padding: 0px 2px 1px;
  }
  table {
    width: 100%;
    margin-bottom: 1em;
    border-color: #ececec;
    border-spacing: 0;
  }
  td {
    color: #666;
  }
  th,
  td {
    padding: 0.5em;
    text-align: left;
    border-bottom: 1px solid #ececec;
    line-height: 1.3;
    font-size: 0.9em;
  }
  uppercase,
  h6,
  th,
  span.widget-title {
    line-height: 1.05;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  th:first-child,
  td:first-child {
    padding-left: 0;
  }
  .shop_table thead th,
  .shop_table .order-total td,
  .shop_table .order-total th {
    border-width: 3px;
  }
  td.product-total,
  .shop_table tfoot tr td,
  .cart_totals tbody tr td,
  .shop_table thead tr th:last-of-type,
  .shop_table tr td:last-of-type {
    text-align: right;
  }
  .shop_table tfoot th {
    font-size: 85%;
    text-transform: inherit;
    letter-spacing: 0;
  }
  ol,
  ul {
    margin-top: 0;
    padding: 0;
  }
  ul {
    list-style: disc;
  }
  pre,
  blockquote,
  form,
  figure,
  p,
  dl,
  ul,
  ol {
    margin-bottom: 1.3em;
  }
  .row {
    padding-left: 0;
    padding-right: 0;
    margin-left: -15px;
    margin-right: -15px;
    width: auto;

    width: 100%;
    display: flex;
    flex-flow: row wrap;

    max-width: 1080px;
  }
  .pt-0 {
    padding-top: 0 !important;
  }
  .large-7 {
    max-width: 58.3333333333%;
    flex-basis: 58.3333333333%;
  }
  .col {
    position: relative;
    margin: 0;
    padding: 0 15px 30px;
    width: 100%;
  }
  .woocommerce-billing-fields {
    padding-top: 15px;
    border-top: 2px solid #ddd;
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
  .form-row-wide {
    clear: both;
  }
  .create-account,
  .shipping-address {
    margin: 0;
  }
  .woocommerce-form__label span {
    font-size: 1.1em;
    font-weight: normal;
  }
  span.amount {
    white-space: nowrap;
    color: #111;
    font-weight: bold;
  }
  .large-5 {
    max-width: 41.6666666667%;
    flex-basis: 41.6666666667%;
  }
  .col-inner {
    position: relative;
    margin-left: auto;
    margin-right: 0;
    width: 100%;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    flex: 1 0 auto;
  }
  .has-border {
    border: 2px solid #446084;
    padding: 15px 30px 30px;

    border-color: #ffa6a8;
  }
  .checkout-sidebar {
    h3 {
      color: #555;
      width: 100%;
      margin-top: 0;
      margin-bottom: 0.5em;
      text-rendering: optimizeSpeed;

      font-size: 1.1em;
      overflow: hidden;
      padding-top: 10px;
      font-weight: bolder;
      text-transform: uppercase;
    }
    div {
      color: #777;
    }
  }
  .shop_table .cart_item td {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  td .product-name {
    word-break: break-word;
    text-overflow: ellipsis;
  }
  .product-name {
    width: 70%;
  }
  .product-total {
    width: 50%;
  }
  .shipping__inner {
    border: 0;
    padding: 0;
    font-size: 1em;
  }
  .shipping__table {
    margin: 0;
  }
  .shipping__list {
    margin-bottom: 0;
  }
  .shipping__list_item {
    display: flex;
    align-items: center;
    min-height: 2em;
  }
  .shop_table ul li,
  .checkout ul li {
    list-style: none;
    margin: 0;
  }
  .shipping__list_label {
    font-weight: normal;
    margin: 0;
    padding: 0.5em 0;
    opacity: 0.8;
    flex: 1;
  }
  .payment_methods p {
    font-size: 0.9em;
  }
  .payment_methods li + li {
    padding-top: 7px;
    border-top: 1px solid #ececec;
  }
  .secondary,
  .checkout-button,
  .button.checkout,
  .button.alt {
    background-color: #d26e4b;
    display: flex;
    align-items: center;
    position: relative;

    .layer-mask {
      position: absolute;
      top: -1px;
      left: -1px;
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      background-color: rgba(255, 255, 255, 0.6);
      z-index: 100;
    }

    .loop {
      margin-right: 4px;
      animation: rotate 1s infinite;
      animation-timing-function: linear;
    }

    .hidden {
      display: none;
    }
  }
  .woocommerce-additional-fields {
    margin-top: 1em;
  }
  .error-message {
    position: relative;
    top: -12px;
    font-size: 0.9em;
    color: #f44336;
    clear: both;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
