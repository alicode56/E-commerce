import { createStore } from "redux";
import reducers, { Reducers } from "../reducers/Reducers";
import { Reducers2 } from "../reducers/Reducers2"
import { AddressReducers } from "../reducers/AddressReducers";
import { combineReducers } from "redux";
const routeReducer = combineReducers({ Reducers, Reducers2, AddressReducers });
const store = createStore(routeReducer);
export default store;