import React from "react";

export default class UpdateTimeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.userName = "Mayank";
        this.state = {
            currentTime: this.returnCurrentTime(),
            counter: 0
        }

       this.incrementTimeValue()

        setInterval(() => {
            // this.setState({
            //     ...this.state,
            //     counter: this.state.counter + 1
            // })

            // //this.state.counter = this.state.counter + 1;
            // this.forceUpdate();
        
        }, 500)
    }

    incrementTimeValue() {
        setInterval(() => {
            this.setState({
                ...this.state,
                counter: this.props.counter
            })
        }, 3000)
    }

    returnCurrentTime() {
        return new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds();
    }

    render() {
        return (
            <div>
                <h1>The Updated Current Time for {this.userName} is: {this.state.currentTime}</h1>
                <h2>Counter Value is: {this.state.counter}</h2>
            </div>
        )
    }
}