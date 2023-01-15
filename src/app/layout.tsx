import { GlobalContainerApp } from '../styles';

import { ReactNode } from 'react';

import RootStyleRegistry from './RootStyleRegistry';
import { Header } from '../components/Global/Header';
import { LayoutContainer } from '../components/Global/Layout/styles';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body>
        <RootStyleRegistry>
          <GlobalContainerApp />
          <LayoutContainer>
            <Header />
            {children}
          </LayoutContainer>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
