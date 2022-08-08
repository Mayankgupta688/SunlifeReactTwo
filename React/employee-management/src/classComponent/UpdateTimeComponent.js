import React from "react";

export default class UpdateTimeComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: 0,
            otherCounter: 10
        }
    }

    render() {
        debugger;
        console.log("Rendered....")
        return (
            <div>
                <h2>Counter Value is: {this.state.counter}</h2>
                <h2>Counter Value is: {this.state.otherCounter}</h2>
            </div>
        )
    }

    componentDidMount() {
        this.setState({
            counter: this.state.counter + 1
        });

        this.setState({
            otherCounter: this.state.otherCounter + 1
        })

        this.setState({
            counter: this.state.counter + 1
        });

        this.setState({
            otherCounter: this.state.otherCounter + 1
        })


        this.setState({
            counter: this.state.counter + 1
        });

        this.setState({
            otherCounter: this.state.otherCounter + 1
        })


        this.setState({
            counter: this.state.counter + 1
        });

        this.setState({
            otherCounter: this.state.otherCounter + 1
        })

        this.setState({
            counter: this.state.counter + 1
        });

        this.setState({
            otherCounter: this.state.otherCounter + 1
        })
    }

    componentDidUpdate() {
        console.log("Component Updated...")
    }

    updateData() {
        console.time("Mayank")
        for(var i = 0; i< 400000; i++) {
            this.setState({
                counter: i
            })
        }
        console.timeEnd("Mayank")
    }
}