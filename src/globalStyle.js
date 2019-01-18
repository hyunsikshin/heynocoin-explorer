import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import typography from './typography';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${typography}
  a {
    text-decoration: none !important;
  }
`;

export default GlobalStyle;
