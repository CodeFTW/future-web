import React from 'react';
import { Tunnel } from 'react-tunnels';

export const updateAppTitle = title => (
  <Tunnel id="app-title">{title || 'Future Web'}</Tunnel>
);
