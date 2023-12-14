import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.styles.backgroundColor};
    color: ${(props) => props.theme.styles.colorText};
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
  }
`;
