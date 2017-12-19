import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom';
import Root from './containers/Root'
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';



ReactDOM.render((

  <BrowserRouter>
    <Root />
  </BrowserRouter>

), document.getElementById('root'))



registerServiceWorker();
