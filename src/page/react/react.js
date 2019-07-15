import '@/main';
import { hot } from 'react-hot-loader/root';

import React from 'react';
import ReactDOM from 'react-dom';

import _App from '@/view/App';
const App = hot(_App);

ReactDOM.render( 
  <App/>,
  document.getElementById('root'),
);