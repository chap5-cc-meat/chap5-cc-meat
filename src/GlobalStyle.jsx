import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }

  *, *::before, *::after {
    box-sizing: border-box;
  }

`;

export default GlobalStyle;
