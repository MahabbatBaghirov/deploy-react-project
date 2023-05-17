import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FavoriteProvider } from './contexts/FavoritesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoriteProvider>
    <App />
  </FavoriteProvider>
);
