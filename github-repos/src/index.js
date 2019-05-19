import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../src/redux/reducers";
import { devToolsEnhancer } from "redux-devtools-extension";
import { Provider } from "react-redux";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
