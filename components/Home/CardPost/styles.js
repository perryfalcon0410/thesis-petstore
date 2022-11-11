import css from 'styled-jsx/css'

export default css`
  .cards {
    display: flex;
    cursor: pointer;
    max-height: 100%;
    flex-wrap: wrap;
    padding-top: 2rem;
    justify-content: space-between;
    border-radius: 15px;
    border-color: blue;
  }

  .card {
    padding-top: 3%;
    padding-bottom: 3%;
    display: grid;
    max-width: 550px;
    
    width: 500px;
    // max-height: 350px;
    text-align: center;
    border: 1px solid #efefef;
    border-radius: 20px;
  }

  .card img {
    object-fit: contain;
    width: 100%;
    height: 300px;
    z-index: -1;
    
  }
  .card :hover {
    box-shadow: 1px -1px 15px 7px rgba(18, 2, 2, 0.3);
    -webkit-box-shadow: 1px -1px 15px 7px rgba(18, 2, 2, 0.3);
    -moz-box-shadow: 1px -1px 15px 7px rgba(18, 2, 2, 0.3);
  }
  .card .content a :hover{
    background-color: blue;
  }
`
