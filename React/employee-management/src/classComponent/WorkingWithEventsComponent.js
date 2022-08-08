import React from 'react';

export default class WorkingWithEventsComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            clickMessage: "Submit Data",
            buttonColor: "red"
        }
        this.updateText = this.updateText.bind(this)
    }

    updateText() {
       this.setState({
        clickMessage: "Click to Avail 15% Discount",
        buttonColor: "green"
       }) 
    }

    updateOriginalText() {
        this.setState({
            clickMessage: "Submit Data",
            buttonColor: "red"
        }) 
    }

    updateColor = () => {

    }

    render() {  
        return (
            <div>
                <input type="button" 
                       style={{color: this.state.buttonColor, border: "1px solid green", paddingLeft: "10px", paddingRight: "10px"}} 
                       value={this.state.clickMessage} 
                       onMouseOver={this.updateText}
                       onMouseOut={this.updateOriginalText.bind(this)} />
            </div>
        )
    }
}