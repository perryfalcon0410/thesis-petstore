import css from 'styled-jsx/css'

export default css`
  a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
  }

  .information {
    margin-top: 60px;

    .nav {
      display: flex;
      flex-wrap: wrap;
      list-style: none;

      padding-left: 0;
      margin-top: 0;
      margin-bottom: 1rem !important;

      .nav-item {
        background: none;
        margin-left: 20px;
        font-size: 1.3rem;

        @media (min-width: 768px) {
          font-size: 1rem;
        }

        .nav-link {
          display: block;
          color: #999999;
          border-radius: 0.25rem;
          padding: 8px 0 !important;
          line-height: 1.5;

          &.active {
            border-bottom: 2px solid #333333 !important;
            border-radius: 0;
            color: #333333 !important;
            background: none !important;
          }
        }
      }
    }

    .tab-content {
      .tab-pane {
        display: none;
        line-height: 1.5;
        font-size: 15px;

        @media (min-width: 768px) {
          font-size: 1rem;
        }
      }

      .active {
        display: block;
        background: none;
        color: #999999 !important;
      }

      .fade {
        transition: opacity 0.15s linear;
      }

      .fade:not(.show) {
        opacity: 0;
      }
    }
  }
`
