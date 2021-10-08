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

  .rc-slider {
    margin-bottom: 5px;
  }

  .rc-slider-track {
    background-color: transparent;
  }

  .rc-slider-rail {
    height: 8px;
    background-color: hsl(0deg,0%,75%);
  }

  .rc-slider-handle{
    background-color: hsl(200deg,100%,35%);
    outline: none;
    box-shadow: none;
    width: 25px;
    height: 25px;
    margin-top: -9px;
  }


  .rc-slider-handle:active,
  .rc-slider-handle:focus,
  .rc-slider-handle:hover{
    box-sizing: content-box;
    border: 3px solid hsl(200deg,100%,75%);
    top: 1px;
  }



`;

export default GlobalStyle;
