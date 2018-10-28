import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App"; // изменили путь
import { store } from "./store/configureStore"; // исправлено
import * as serviceWorker from "./serviceWorker";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
