import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  font-size: 16px;
  * {
        box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }
}
`;

export default GlobalStyle;
