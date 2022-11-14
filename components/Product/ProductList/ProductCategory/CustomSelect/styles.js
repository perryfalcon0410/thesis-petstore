import css from 'styled-jsx/css'

export default css`
  .select-dropdown {
    width: 100%;
    margin-top: -2px;
    border: 1px solid #ddd;
    border-radius: 4px;
    border-top: none;
    display: block;
    z-index: 100;
    background-color: #fff;
    border-top: none;

    &.move-top {
      top: -182px;
      border-bottom: 0;
      border-top: 1px solid #aaa;
    }

    &.select-dropdown-below {
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
        height: auto;
        overflow-y: auto;
        list-style: none;
        margin: 0;
        padding: 10px 0;
        .select-results-option {
          cursor: pointer;
          padding: 6px 0.75em;
          text-align: left;
        }
      }
    }
  }
`
