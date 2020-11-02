import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';

import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.dark};
    color: ${theme.white};
    font-size: 1rem;
  }
  #root {
    position: relative;
    min-height: 100vh;
    padding-bottom: calc(1.5 + 40px);
  }
`;

const api = axios.create({
  baseURL: 'http://localhost:5000'
});
export const ApiContext = createContext({})

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ToastContainer />
    <ApiContext.Provider value={api}>
    <App />
    </ApiContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
