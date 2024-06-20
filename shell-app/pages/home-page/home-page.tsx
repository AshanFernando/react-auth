// HomePage.tsx
import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@bit-bazaar/shell-app.auth.auth-provider';
import { LoginButton } from '@bit-bazaar/shell-app.ui.login-button';

export type HomePageProps = {
  /**
   * Sets the component children.
   */
  children?: ReactNode;
};

export function HomePage({ children }: HomePageProps) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/profile" />;
  }

  return (
    <div>
      {children}
      <h1>Welcome to Our Application</h1>
      <p>
        This is a public page accessible to everyone. Please log in to access
        more features.
      </p>
      <LoginButton>Login</LoginButton>
    </div>
  );
}
