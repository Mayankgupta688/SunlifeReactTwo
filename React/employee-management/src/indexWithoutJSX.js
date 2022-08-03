import ReactDOM from "react-dom";
import React from "react";

ReactDOM.render(
    React.createElement("div", {}, [
        React.createElement("div", {}, [
            React.createElement("h1", {}, "Hello World..."),
            React.createElement("h2", {}, "Welcome to TechnoFunnel")
        ]), React.createElement("p", {}, [
            React.createElement("label", {}, "Hi... Mayank"),
            React.createElement("h4", {}, "This is Simple")
        ]),React.createElement("b", {}, "Try This....")
    ]
), document.getElementById("root"));

/* 
    <div>
        <div>
            <h1>Hello World...</h1>
            <h2>Welcome to TechnoFunnel</h2>
        </div>

        <p>
            <label>Hi... Mayank</label>
            <h4>This is Simple</h4>
        </p>

        <b>Try This....</b>
    </div> 
*/
