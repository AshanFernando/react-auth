import type { ReactNode } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@bit-bazaar/design.actions.button'

export type LoginButtonProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function LoginButton({ children }: LoginButtonProps) {
  const { loginWithRedirect } = useAuth0();
  return <Button variant="contained" onClick={() => loginWithRedirect()}>{children}</Button>;
}
