import { BrowserRouter } from 'react-router-dom';
import {
  createRoot,
  // hydrateRoot
} from 'react-dom/client';
import { ShellApp } from './shell-app.js';
import { AuthProvider } from '@bit-bazaar/shell-app.auth.auth-provider';
import { ThemeProvider } from '@bit-bazaar/design.theme.theme-provider';

/**
 * comment this in for server-side rendering (ssr) and comment
 * out of the root.render() invocation below.
 */
// hydrateRoot(
//   document.getElementById("root") as HTMLElement,
//   <BrowserRouter>
//     <ShellApp />
//   </BrowserRouter>
// );

/**
 * mounting for client side rendering.
 */
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider>
        <ShellApp />
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>
);
