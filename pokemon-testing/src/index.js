import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import PageComponent from './containers/Page';
import './style/main.css';
import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <PageComponent />
  </Provider>,
  document.getElementById('root'),
);
