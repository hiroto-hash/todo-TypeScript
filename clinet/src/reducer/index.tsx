import { combineReducers } from "redux";
import  reducer  from "./events";
import { getAction } from "../actions/index"

export type ReduxState = {
  reducer: getAction
}

export default combineReducers({ reducer });
