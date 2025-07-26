import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId="847617835494-fqbffj7lvk9if52f8j91t218vcincp1g.apps.googleusercontent.com">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GoogleOAuthProvider>
  </BrowserRouter>
);
