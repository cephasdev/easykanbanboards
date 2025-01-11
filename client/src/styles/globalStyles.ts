// A single file for global CSS (e.g., resetting browser styles, global font styles, etc.) that uses createGlobalStyle from Styled Components.

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* CSS Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
  height: 100%;
  }

  body {
    margin: 0 auto;
    padding: 1rem;
    max-width: 1200px;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text}; 
  }

  #root {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  h1 {
    margin-bottom: ${({ theme }) => theme.spacing(8)};
  }
`;

export default GlobalStyles;
