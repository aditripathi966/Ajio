import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const container = document.getElementById('root');

render(
  <Auth0Provider
    domain="dev-04hxu5opc1rejqtr.us.auth0.com"
    clientId="wWLrgv1FRLALiS6ATIjkedA6hRvXV99l"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>,
  container
);