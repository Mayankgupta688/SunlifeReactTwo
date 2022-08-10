import React from 'react';

export default class FilterEmployeeComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            textValue: ""
        }
    }

    updateValue = (event) => {
        this.setState({
            textValue: event.target.value
        })

        this.props.filterData(event.target.value)
    }

    render() {
        return (
            <div>
                <b style={{display: "inline-block", marginRight: "10px"}}>Filter Employee List</b>
                <input type="text" onChange={this.updateValue} value={this.state.textValue} /><br/><br/><hr/>
            </div>
        )
    }
}