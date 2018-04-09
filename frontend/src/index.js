import React from 'react';
import ReactDOM from 'react-dom';
import { Trainer } from './Trainer';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Trainer />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
