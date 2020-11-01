import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';

import App from './App';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.dark};
    color: ${theme.white};
    font-size: 1rem;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
