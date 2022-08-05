import React from "react";

export default class UpdateTimeComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }

        setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <h2>Counter Value is: {this.state.counter}</h2>
            </div>
        )
    }
}