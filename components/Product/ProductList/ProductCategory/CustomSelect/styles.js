import css from 'styled-jsx/css'

export default css`
  .select-dropdown {
    width: 250px;
    border: 1px solid #aaa;
    border-radius: 4px;
    position: absolute;
    left: 10px;
    border-radius: 4px;
    display: block;
    z-index: 100;
    background-color: #fff;

    &.select-dropdown-below {
      border-top: none;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    .select-search {
      display: block;
      padding: 4px;
      width: 100%;

      .select-search-field {
        border: 1px solid #aaa;
        display: block;
        width: 100%;
        outline: none;
        padding: 6px 0.75em;
        color: #111;
        background-color: #fff;
      }
    }

    .select-results {
      display: block;

      .select-results-options {
        height: 200px;
        overflow-y: auto;
        list-style: none;
        margin: 0;
        padding: 0;
        .select-results-option {
          cursor: pointer;
          padding: 6px 0.75em;
          text-align: left;
        }
      }
    }
  }
`
