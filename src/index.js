import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './App.css';

require('file-loader?name=[name].[ext]!./index.html');

const rootEle = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootEle
);