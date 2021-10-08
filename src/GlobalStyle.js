import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`

 ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 2.4rem;
    line-height: 1.5;
    /* padding: 2rem; temp */
  }

  a {
  text-decoration: none;
  color: black;
  }

  .rc-slider-track {
    background-color: transparent;
  }

  .rc-slider-rail {
    height: 8px;
  }

  .rc-slider-handle,
  .rc-slider-handle:active,
  .rc-slider-handle:focus,
  .rc-slider-handle:hover{
    background-color: green;
    outline: none;
    border: 2px solid green;
    box-shadow: none;
    width: 25px;
    height: 25px;
    margin-top: -9px;
  }



`;

export default GlobalStyle;
