import React from 'react';
import Axios from "axios";
import "../componentStyles/EmployeeListingComponent.css";
import AddEmployeeComponent from './AddEmployeeComponent';
import FilterEmployeeComponent from "./FilterEmployeeComponent";
import EmployeeDetailsComponent from "./EmployeeDetailsComponent";

export default class EmployeeListingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.filterData = this.filterData.bind(this);
        this.refreshFrontend = this.refreshFrontend.bind(this);
        this.state = {
            masterEmployeeList: [],
            employeeList: [],
            hasApiError: false
        };
    }

    deleteEmployee(employeeToDelete) { 

        Axios.delete("http://localhost:4000/employees/" + employeeToDelete).then(() => {
            alert("Employee Got Deleted...");

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
    
        }, () => {
            alert("Error Deleting Employee....")
        })
    }

    filterData(filterTextValue) {
        var filteredEmployees = this.state.masterEmployeeList.filter((employee) => {
            return employee.name.toLowerCase().indexOf(filterTextValue.toLowerCase()) > -1
        })

        this.setState({
            ...this.state,
            employeeList: filteredEmployees
        })
    }

    render() {
        return (
            <div style={{margin: "20px"}}>

                <AddEmployeeComponent refreshFrontend={this.refreshFrontend}></AddEmployeeComponent><br/><br/>

                <FilterEmployeeComponent filterData={this.filterData}></FilterEmployeeComponent>

                {this.state.employeeList.map((employee) => {
                    return (
                        <EmployeeDetailsComponent employee={employee} deleteEmployee={this.deleteEmployee}></EmployeeDetailsComponent>
                    )
                })}

                {this.state.hasApiError && <h1>Error Retieving Data from APIs</h1>}
            </div>
        )
    }

    refreshFrontend() {
        Axios.get("http://localhost:4000/employees").then((response) => {
            this.setState({
                employeeList: response.data,
                masterEmployeeList: response.data
            })
        })
    }

    componentDidMount() {
        Axios.get("http://localhost:4000/employees").then((response) => {
            this.setState({
                employeeList: response.data,
                masterEmployeeList: response.data,
                textValue: ""
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