import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import User from "./reducers/User";
import Note from "./reducers/Notes";

const rootReducer = combineReducers({
  User,
  Note,
});

export default createStore(rootReducer, applyMiddleware(thunk));
