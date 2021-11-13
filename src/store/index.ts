import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import UsersReducer from "./users/reducer";
import UserSelectedReducer from './user/reducer'

const RootState = combineReducers({
  user: UsersReducer,
  userSelected: UserSelectedReducer
});
const store = createStore(RootState, composeWithDevTools());

export { store };
