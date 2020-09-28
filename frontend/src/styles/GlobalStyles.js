import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 :root {
    font-size: 60%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  button, input {
    border: 0;
    background: transparent;
  }
  ul {
    list-style-type: none;
  }
`;

export default GlobalStyle;
