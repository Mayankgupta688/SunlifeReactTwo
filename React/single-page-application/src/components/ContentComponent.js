import AboutComponent from "./AboutComponent";
import HelpComponent from "./HelpComponent";
import EmployeeListingHooksComponent from "./EmployeeListingHooksComponent";

import { Route } from "react-router-dom"

export default function ContentComponent() {
    return (
        <div><hr/>
            <h2>Given Below is the required Component</h2><br/>

            <Route exact path="/" component={EmployeeListingHooksComponent}></Route>
            <Route exact path="/home" component={EmployeeListingHooksComponent}></Route>
            <Route exact path="/about" component={AboutComponent}></Route>
            <Route exact path="/help" component={HelpComponent}></Route>
            <Route exact path="/employee/:id/username/:name" render={(props) =>{
                debugger;
                return <HelpComponent {...props}></HelpComponent>
            }}></Route>
        </div>
    )
}
