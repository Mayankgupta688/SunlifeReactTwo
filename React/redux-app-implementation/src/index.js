import ReactDOM from "react-dom";
import  { Provider} from "react-redux";
import { createStore } from "redux";
import HomeComponent from "./HomeComponent";
import ListComponent from "./ListComponent";
import { rootReducers } from "./reducers/index"

// Add reducer Information to Store
var store = createStore(rootReducers)

ReactDOM.render((
    <Provider store={store}>
        <ListComponent></ListComponent>
        <HomeComponent></HomeComponent>
    </Provider>
), document.getElementById("root"))
