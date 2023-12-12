import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #000;
    color: #52a6f3;
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
  }
`;
