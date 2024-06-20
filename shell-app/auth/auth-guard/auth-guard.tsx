// AuthGuard.tsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';

export type AuthGuardProps = {
  /**
   * The component's children to be protected by the guard.
   */
   children: ReactNode | ((user: any) => ReactNode);
};

export function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated, user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>; // Display a loading indicator while checking authentication status
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />; // Redirect unauthenticated users to the root
  }

  if (typeof children === 'function') {
    return children(user);
  }

  return <>{children}</>; // Render the children for authenticated users
}
