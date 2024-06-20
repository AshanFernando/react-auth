import { BrowserRouter } from 'react-router-dom';
import { 
  createRoot, 
  // hydrateRoot 
} from 'react-dom/client';
import { ShellApp } from "./shell-app.js";
import { Auth0Provider } from '@auth0/auth0-react';
import { ThemeProvider } from '@bit-bazaar/design.theme.theme-provider' ;

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
  <Auth0Provider
    domain="dev-recnwmxdyhuu7o4o.us.auth0.com"
    clientId="p8tBZWYCqzVoREVZduWDX3TDgKKZEfW2"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ThemeProvider>
    <ShellApp />
    </ThemeProvider>
    </Auth0Provider>
  </BrowserRouter>
);