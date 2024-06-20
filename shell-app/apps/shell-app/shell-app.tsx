import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { AuthGuard } from '@bit-bazaar/shell-app.auth.auth-guard';
import { HomePage } from '@bit-bazaar/shell-app.pages.home-page';
import { ProfilePage } from '@bit-bazaar/shell-app.pages.profile-page'

export function ShellApp() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route
        path="/profile"
        element={<AuthGuard>{(user) => <ProfilePage user={user} />}</AuthGuard>}
      />
    </Routes>
  );
}
