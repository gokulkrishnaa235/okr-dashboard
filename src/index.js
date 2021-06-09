import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./Store/Reducer";
import saga from "./Store/Saga";
import "./index.css";
import Header from "./components/Header";
import OkrView from "./components/OKrView";
import ErrorBoundary from "./ErrorBoundary";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleWares = applyMiddleware(sagaMiddleware);

// configuring store with middleware and reducer
const store = createStore(reducer, composeEnhancers(middleWares));

// initial saga
sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <Header />
      <OkrView />
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
