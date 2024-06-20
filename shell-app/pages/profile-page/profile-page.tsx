// ProfilePage.tsx
import React, { ReactNode } from 'react';
import { LogoutButton } from '@bit-bazaar/shell-app.ui.logout-button';

export type ProfilePageProps = {
  /**
   * The user's profile information.
   */
  user: {
    picture: string;
    name: string;
    email: string;
  };
  /**
   * Sets the component children.
   */
  children?: ReactNode;
};

export function ProfilePage({ user, children }: ProfilePageProps) {
  return (
    <div>
      {children}
      <img
        src={user.picture}
        alt={user.name}
        style={{ borderRadius: '50%', width: '150px', height: '150px' }}
      />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <LogoutButton>Logout</LogoutButton>
    </div>
  );
}
