import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import User from "./reducers/User";

const rootReducer = combineReducers({
  User,
});

export default createStore(rootReducer, applyMiddleware(thunk));
