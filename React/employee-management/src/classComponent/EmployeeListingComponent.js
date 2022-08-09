import React from 'react';
import Axios from "axios";
import "../componentStyles/EmployeeListingComponent.css";

export default class EmployeeListingComponent extends React.Component {
    constructor() {
        super();
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.filterData = this.filterData.bind(this);
        this.state = {
            masterEmployeeList: [],
            employeeList: [],
            hasApiError: false, 
            textValue: ""
        };
        
    }

    deleteEmployee(event) { 
        var employeeToDelete = event.target.name;

        var newArray = this.state.masterEmployeeList.filter((employee) => {
            return employee.id !== employeeToDelete;
        });

        this.setState({
            ...this.state,
            employeeList: newArray,
            masterEmployeeList: newArray
        }, () => {
            var filteredEmployees = this.state.employeeList.filter((employee) => {
                return employee.name.toLowerCase().indexOf(this.state.textValue.toLowerCase()) > -1
            })
    
            this.setState({
                ...this.state,
                employeeList: filteredEmployees
            })
        })
    }

    filterData(event) {
        debugger;
        var filterValue = event.target.value;
        var filteredEmployees = this.state.masterEmployeeList.filter((employee) => {
            return employee.name.toLowerCase().indexOf(filterValue.toLowerCase()) > -1
        })

        this.setState({
            ...this.state,
            employeeList: filteredEmployees,
            textValue: event.target.value
        })
    }

    render() {
        return (
            <div style={{margin: "20px"}}>
                <b style={{display: "inline-block", marginRight: "10px"}}>Filter Employees</b><input type="text" onChange={this.filterData} value={this.state.textValue} /><br/><br/><hr/>
                {this.state.employeeList.map((employee) => {
                    return (
                        <div className="card">
                            <img src="https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg" className="card-img-top" alt={employee.name} />
                            <div className="card-body">
                                <h5 className="card-title">{employee.name}</h5>
                                <p className="card-text">Employee Id is <b>{employee.id}</b> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <input type="button" name={employee.id} value={ "Delete " + employee.name } className="btn btn-primary" onClick={this.deleteEmployee} />
                            </div>
                        </div>
                    )
                })}

                {this.state.hasApiError && <h1>Error Retieving Data from APIs</h1>}
            </div>
        )
    }

    componentDidMount() {
        Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login").then((response) => {
            this.setState({
                employeeList: response.data,
                masterEmployeeList: response.data
            })
        }, (errorResponse) => {
            alert(errorResponse.code)
            this.setState({
                ...this.state,
                hasApiError: true
            })
        });
    }
}