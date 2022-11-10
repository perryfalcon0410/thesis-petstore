import css from 'styled-jsx/css'

export default css`
  .flexslider {
    margin: 0 0 20px;
    padding: 0;

    background: #fff;
    position: relative;
    zoom: 1;

    border: 0px solid #fff;
    border-radius: 4px;

    .flex-viewport {
      position: relative;
      overflow: hidden;
      max-height: 2000px;
      transition: all 1s ease;

      .slides {
        width: 800%;
        transition-duration: 0.6s;
        zoom: 1;

        margin: 0;
        padding: 0;
        list-style: none;

        .big-image {
          margin-right: 0px;
          float: left;
          display: block;
        }

        .small-image {
          width: 120px;
          margin-right: 20px;
          float: left;
          display: block;
        }
      }
    }
  }
`
