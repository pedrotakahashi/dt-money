import React from 'react'
import ReactDOM from 'react-dom';
import {App} from './App';
import fakeServer from './server/fakeServer';

fakeServer();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
