import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --black-theme: #000;
    --white-text: #fff;
    --btn-color: #008732;
    --btn-excluir: #ff0000;
    --btn-detalhes-filmes: #836FFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  img {
    width: 100%;
    display: block;
  }
`;