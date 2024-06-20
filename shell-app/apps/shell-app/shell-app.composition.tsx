import { MemoryRouter } from 'react-router-dom';
import { ShellApp } from './shell-app.js';
import { ThemeProvider } from '@bit-bazaar/design.theme.theme-provider';

export const ShellAppBasic = () => {
  return (
    <MemoryRouter>
      <ThemeProvider>
        <ShellApp />
      </ThemeProvider>
    </MemoryRouter>
  );
};
