import type { ReactNode } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@bit-bazaar/design.actions.button';

export type LogoutButtonProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function LogoutButton({ children }: LogoutButtonProps) {
  const { logout } = useAuth0();
  return  <Button variant="contained" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>{children}</Button>;
}
