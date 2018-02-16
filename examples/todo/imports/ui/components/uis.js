import React from 'react';
import { Tunnel } from 'react-tunnels';

export const updateAppTitle = title => {
  if (document) {
    document.title = title ? `${title} | Future Web` : 'Future Web';
  }
  return <Tunnel id="app-title">{title || 'Future Web'}</Tunnel>;
};
