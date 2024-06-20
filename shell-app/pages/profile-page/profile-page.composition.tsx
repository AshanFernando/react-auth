import React from 'react';
import { ProfilePage } from './profile-page.js';

const testUser = {
  picture: 'https://via.placeholder.com/150', // Placeholder image URL
  name: 'John Doe',
  email: 'john.doe@example.com',
};

export const BasicProfilePage = () => {
  return (
    <ProfilePage user={ testUser }></ProfilePage>
  );
}
