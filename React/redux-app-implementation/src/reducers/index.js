import { combineReducers } from "redux";

import employees_reducer from "./employees_reducer";
import flights_reducer from "./flights_reducer";

export const rootReducers = combineReducers({
    employees: employees_reducer,
    flights: flights_reducer
})

// var store = {
//     employees: [],
//     flights: []
// }