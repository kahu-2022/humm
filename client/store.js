import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import user from "./reducers/user";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  user,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;