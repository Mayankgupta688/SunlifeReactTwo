import { combineReducers } from "redux";

import employees from "./employees";
import flights from "./flights";

export const rootReducers = combineReducers({
    employees: employees,
    flights: flights
})