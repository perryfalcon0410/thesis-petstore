import css from 'styled-jsx/css'
export default css`
.container {
  height: calc(375px);
  background-color: #FFFFFFF;
  overflow: hidden;
  position: relative;
  border: 1px solid #000000;
}
.arrowContainer {
  position: absolute;
  width: 2%;
  height: 200%;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  z-index: 2;
}

.containerSlider {
  display: flex;
  height: 100%;
  width: 600vw;
  transition: all 1.5s ease-in-out ;
  img{
    width: 100%;
    height: 100%;
  }
}

.imageSlider {
  width: 100vw;
  height: 100%;
  position: relative;
}
`
