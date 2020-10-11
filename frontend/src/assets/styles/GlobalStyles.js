import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 :root {
    font-size: 85%;
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
    transition: all .2s ease-in-out;
    &:hover {
      opacity: .8;
    }
  }
  button, input {
    border: 0;
    background: transparent;
    &:focus {
      outline: 0;
    }
    color: var(--font-color);
    font-weight: bold;
  }
  
  ul {
    list-style-type: none;
  }
`;

export default GlobalStyle;
