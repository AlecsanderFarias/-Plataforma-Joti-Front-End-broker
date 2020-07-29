import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif !important;
    
    
  }

  *:focus {
    outline: 0;
    overflow: hidden !important;
  }

  html, body, #root {
    height: 100%;
    font-family: 'Source Sans Pro', sans-serif;
    background: #fff;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Source Sans Pro', sans-serif;
    background: #fff;
  }

  body, input, button {
    font: 14px 'Ubuntu', sans-serif;
    font-family: 'Source Sans Pro', sans-serif;
  }

  a {
    text-decoration: none;
    font-family: 'Source Sans Pro', sans-serif;
  }

  ul {
    list-style: none;
    font-family: 'Source Sans Pro', sans-serif;
  }

  button {
    cursor: pointer;
    font-family: 'Source Sans Pro', sans-serif;
  }
  
  .MuiDialog-paperScrollPaper{
    overflow: hidden
  }




`;
