export default function flights(flightStore=[], action) {
    if(action.type === "add_flight") {
        return action.payload;
    }

    return flightStore;
}