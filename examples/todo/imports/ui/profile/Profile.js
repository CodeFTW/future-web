import React from 'react';

export const Profile = ({ loggedUser }) => (
  <div>
    <p>{loggedUser.email}</p>
  </div>
);
