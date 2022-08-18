import React from "react"

function higherOrderComponent(ComponentOne, ComponentTwo) {
    return class NewComponent extends React.Component {
        constructor() {
            super()
            this.state = {
                counter: 0
            }
        }

        render() {
            return (
                <>
                    <h1>Counter Value is: {this.state.counter}</h1>
                    <ComponentOne></ComponentOne>
                    <ComponentTwo></ComponentTwo>
                </>
            )
        }
    }
}




function HomeComponent() {
    return <h1>Hello World...</h1>
}

function HelpComponent() {
    return <h1>Help Component</h1>
}

function OtherComponent() {
    return <h1>Other Component</h1>
}

export var OtherComponentHigher = higherOrderComponent(OtherComponent, HelpComponent)

export default higherOrderComponent(HomeComponent, HelpComponent)