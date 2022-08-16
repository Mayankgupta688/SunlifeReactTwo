export default function HelpComponent(props) {
    debugger;
    function redirectUser() {
        props.history.push("/home")
    }
    return (
        <div>
            <h1>This is Help Component</h1>
            <input type="button" onClick={redirectUser} value="Redirect To Home" />
        </div>
    )
}