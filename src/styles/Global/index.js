import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }

  html, body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
`;
