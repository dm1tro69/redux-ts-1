import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {userReducer} from "./reducers/UserReducer";
import {rootReducer} from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk))