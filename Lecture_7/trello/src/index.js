import ReactDOM from 'react-dom';
import React from 'react';
// I'm a rider ........
import { Provider } from 'react-redux';

import App from './app';
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
