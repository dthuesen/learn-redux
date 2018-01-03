import { applyMiddleware, createStore } from 'redux';

import App from './components/app';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
