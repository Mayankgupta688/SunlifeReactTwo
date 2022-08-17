import { Route } from "react-router-dom"
import HomeComponent from "./HomeComponent";
export default function HelpComponent(props) {
    debugger;
    function redirectUser() {
        props.history.push("/home")
    }
    return (
        <div>
            <h1>This is Help Component {props.match.params.id} {props.match.params.name}</h1>
            <input type="button" onClick={redirectUser} value="Redirect To Home" />
        </div>
    )
}