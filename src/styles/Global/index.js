import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }

  html, body {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    overflow: visible;
  }

  button, select, input {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  label, select {
    color: #757575;
  }

  input, select {
    background-color: #f5f5f5;
    border: 2px solid #BDBDBD;
    border-radius: 12px;
    padding: 10px;
  }

  input[type=radio], input[type=checkbox] {
    margin-right: 10px;
  }

  button {
    background-color: white;
    border: 2px solid #0097A7;
    border-radius: 12px;
    color: #0097A7;

    &:hover{
      background-color: #0097A7;
      color: white;
    }
  }

  span {
    margin-bottom: 10px;
  }
`;
