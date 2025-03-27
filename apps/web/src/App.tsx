import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { theme } from './theme';
import { GlobalStyle } from './styles/global';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}; 