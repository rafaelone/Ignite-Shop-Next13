'use client';

import { Roboto } from '@next/font/google';
import { createGlobalStyle } from 'styled-components';

const nextFont = Roboto({
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin'],
});

export const GlobalContainerApp = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme.gray900};
    color: ${(props) => props.theme.gray100}
  }

  body, input, textarea, button {
    font-weight: ${nextFont.style.fontWeight};
    font-family: ${nextFont.style.fontFamily};
  }
  

`;
