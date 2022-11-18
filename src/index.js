import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import {BrowserRouter} from 'react-router-dom';
// import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
