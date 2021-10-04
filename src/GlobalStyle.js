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
    font-family: Inter, Arial, Helvetica, sans-serif;
    font-size: 2.4rem;
    line-height: 1.5;
    /* padding: 2rem; temp */
  }

  a {
  text-decoration: none;
  }
`;

export default GlobalStyle;