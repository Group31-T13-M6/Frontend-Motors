import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Global from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import Providers from './context/Providers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <Global />
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
