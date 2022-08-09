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

        if(event.target.value.indexOf(" ") > -1) {
            alert("Spaces are not allowed")
        } else {
            this.setState({
                ...this.state,
                [event.target.name]: event.target.value
            })
        } 
    }

    handleClick(event) {
        // To stop the event Propogation
        event.stopPropagation();
    }

    render() {
        return (
            <div>
                <section>
                    <label style={{display: "inline-block", width: "100px"}}>Name: </label><input type="text" value={this.state.nameValue} name="nameValue" onChange={this.updateValue}/><br/><br/>
                    <label style={{display: "inline-block", width: "100px"}}>Age: </label><input type="text" value={this.state.ageValue} name="ageValue" onChange={this.updateValue}/><br/><br/>
                    <label style={{display: "inline-block", width: "100px"}}>Designation: </label><input type="text" value={this.state.designationValue} name="designationValue" onChange={this.updateValue}/><br/><br/>
                    <label style={{display: "inline-block", width: "100px"}}>Salary: </label><input type="text" value={this.state.salaryValue} name="salaryValue" onChange={this.updateValue}/><br/><br/>
                    <label style={{display: "inline-block", width: "100px"}}>Bonus: </label><input type="text" value={this.state.bonusValue} name="bonusValue" onChange={this.updateValue}/><br/><br/>
                    <label style={{display: "inline-block", width: "100px"}}>Address: </label><input type="text" value={this.state.addressValue} name="addressValue" onChange={this.updateValue}/><br/><br/>
                </section>
            </div>
        )
    }
}