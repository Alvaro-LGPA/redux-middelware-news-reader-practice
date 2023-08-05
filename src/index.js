import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import store from './app/store';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'

const { worker } = require('./mocks/browser');
worker.start();


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);


// old way:
/* ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
 */