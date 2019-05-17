import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import rootReducer from "../src/redux/reducers";
import { Provider } from "react-redux";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
