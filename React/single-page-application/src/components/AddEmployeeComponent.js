import React from 'react';
import Axios from "axios";

export default class AddEmployeeComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            avatarValue: "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg",
            nameValue: "",
            idValue: 200,
            createdAtValue: "Today"
        }
    }

    addEmployee() {
        Axios.post("http://localhost:4000/employees", {
            name: this.state.nameValue,
            id: this.state.idValue,
            avatar: this.state.avatarValue,
            createdAt: this.state.createdAtValue
        }).then(() => {
            this.setState({
                avatarValue: "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg",
                nameValue: "",
                idValue: 200,
                createdAtValue: "Today"
            })

            this.props.refreshFrontend();
        })
    }

    updateValue = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Add Employee Component
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <label style={{display: "inline-block", width: "100px"}}>Name: </label><input type="text" value={this.state.nameValue} name="nameValue" onChange={this.updateValue}/><br/><br/>
                        <label style={{display: "inline-block", width: "100px"}}>Id: </label><input type="text" value={this.state.idValue} name="idValue" onChange={this.updateValue}/><br/><br/>
                        <label style={{display: "inline-block", width: "100px"}}>Avatar: </label><input type="text" value={this.state.avatarValue} name="avatarValue" onChange={this.updateValue}/><br/><br/>
                        <label style={{display: "inline-block", width: "100px"}}>CreatedAt: </label><input type="text" value={this.state.createdAtValue} name="createdAtValue" onChange={this.updateValue}/><br/><br/>
                        <input type="button" value="Submit"  onClick={this.addEmployee.bind(this)}/><br/><br/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}