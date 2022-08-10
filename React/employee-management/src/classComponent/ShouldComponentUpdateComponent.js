import React from 'react';

export default class ShouldComponentUpdateComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    updateCounter() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.counter % 4 === 0) {
            return true;
        }
        
        return false;
    }

    render() {
        return (
            <div style={{margin: "20px"}}>
                <b>Counter: {this.state.counter}</b><br/><br/>
                <input type="button" value="Submit" onClick={this.updateCounter.bind(this)} />
            </div>
        )
    }
}