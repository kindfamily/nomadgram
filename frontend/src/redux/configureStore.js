import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { i18nState } from "redux-i18n";
import user from "./modules/user";
// import Reactotron from 'ReactotronConfig';

const env = process.env.NODE_ENV;

export const history = createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = history =>
  combineReducers({
    user,
    i18nState,
    router: connectRouter(history)
  });

let store;

if (env === "development") {
  store = initialState =>
    createStore(
      reducer(history),
      composeWithDevTools(applyMiddleware(...middlewares))
    );
} else {
  store = initialState =>
    createStore(reducer(history), applyMiddleware(...middlewares));
}

export default store();
