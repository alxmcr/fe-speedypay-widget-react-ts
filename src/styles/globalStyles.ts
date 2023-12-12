import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #000;
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
  }
`;
