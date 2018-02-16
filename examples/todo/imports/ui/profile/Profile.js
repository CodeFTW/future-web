import React from 'react';
import { updateAppTitle } from '../components/uis';

export const Profile = ({ loggedUser }) => (
  <div>
    {updateAppTitle('Profile')}
    <p>{loggedUser.email}</p>
  </div>
);
