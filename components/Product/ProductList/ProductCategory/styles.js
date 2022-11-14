import css from 'styled-jsx/css'

export default css`
  .product-categories-container {
    width: 100%;
    position: relative;

    .product-categories-content {
      margin: 20px 0;

      h5 {
        margin: 0;
        padding-bottom: 15px;
        font-size: 18px;
        color: #222222;
      }

      .selection-container {
        display: inline-block;
        width: 100%;
        height: 40px;
        border-radius: 5px;
        padding: 0.75em;
        background-color: #fff;
        border: 1px solid #ddd;
        outline: none;
        position: relative;

        .selection-content {
          width: 90%;
          color: #444;
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          .selection-rendered {
            width: 100%;
          }
          .selection-content-clear {
            cursor: pointer;
            float: right;
            font-weight: 700;
          }
          .selection-content-arrow {
            top: 50%;
            width: 1.7em;
            transform: translateY(-50%);
            height: 26px;
            position: absolute;
            right: 10px;
            cursor: pointer;

            b {
              /* border-color: transparent transparent #888 transparent; */
              /* border-width: 0 4px 5px 4px; */
              /* margin-top: -9px; */
              margin-top: -3px;
              border-color: #888 transparent transparent transparent;
              border-width: 5px 4px 0 4px;
              border-style: solid;
              height: 10px;
              left: 100%;
              margin-left: -10px;
              position: absolute;
              top: 50%;
              width: 0;
            }
          }
        }
      }
    }
  }
`
