import { createStore, applyMiddleware } from "redux"
import reducer from "./reducer"
import thunk from "redux-thunk";
import { Action } from "redux";
import { todoActions } from "./actions";

export const store = createStore(reducer, applyMiddleware(thunk));


export type ReduxAction = todoActions | Action