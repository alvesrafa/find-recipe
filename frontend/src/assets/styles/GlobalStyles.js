import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 :root {
    font-size: 75%;
    --background-color: #FCEFE3;
    --primary-light: #FF9147;
    --primary:#FE7F2D;
    --primary-dark: #B3500E;
    --font-color: #3D3A37;
    --font-title: #211F1E;
    
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--background-color);
    color: var(--font-color);
  }
  a {
    text-decoration: none;
    
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
