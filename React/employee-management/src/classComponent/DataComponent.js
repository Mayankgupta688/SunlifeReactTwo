import React from 'react';

export default class DataComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            nameValue: "Mayank",
            ageValue: "30",
            designationValue: "Developer",
            salaryValue: "10",
            bonusValue: "1",
            addressValue: "Delhi"
        }
    }

    updateValue = (event) => {
        this.setState({
            nameValue: event.target.value
        }, () => {
            console.log(this.state.textValue)
        })
    }

    handleClick(event) {
        event.stopPropagation();
    }

    render() {
        return (
            <div>
                <section>
                    <label style={{display: "inline-block", width: "100px"}}>Name: </label><input type="text" value={this.state.nameValue} onChange={this.updateValue}/><br/><br/>
                    <label style={{display: "inline-block", width: "100px"}}>Age: </label><input type="text" value={this.state.ageValue} onChange={this.updateValue}/><br/><br/>
                    <label style={{display: "inline-block", width: "100px"}}>Designation: </label><input type="text" value={this.state.designationValue} onChange={this.updateValue}/><br/><br/>
                    <label style={{display: "inline-block", width: "100px"}}>Salary: </label><input type="text" value={this.state.salaryValue} onChange={this.updateValue}/><br/><br/>
                    <label style={{display: "inline-block", width: "100px"}}>Bonus: </label><input type="text" value={this.state.bonusValue} onChange={this.updateValue}/><br/><br/>
                    <label style={{display: "inline-block", width: "100px"}}>Address: </label><input type="text" value={this.state.addressValue} onChange={this.updateValue}/><br/><br/>
                </section>
            </div>
        )
    }
}