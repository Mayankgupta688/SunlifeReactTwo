export default function flights_reducer(flightDataInStore=[], action) {
    if(action.type === "add_flight") {
        return action.payload;
    }

    return flightDataInStore;
}