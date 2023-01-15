'use client';

import { darkTheme } from '../styles/themes/dark';

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '../lib/styled-components';

export default function RootStyleRegistry({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={darkTheme}>
        <>{children}</>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
