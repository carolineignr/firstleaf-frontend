import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from './redux/store';
import './index.scss';

const rootNode = document.getElementById('root');
const root = createRoot(rootNode);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
