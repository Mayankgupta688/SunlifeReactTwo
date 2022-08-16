import React, { useState, useEffect } from 'react';
import Axios from "axios";
import "../componentStyles/EmployeeListingComponent.css";
import AddEmployeeComponent from './AddEmployeeComponent';
import FilterEmployeeComponent from "./FilterEmployeeComponent";
import EmployeeDetailsComponent from "./EmployeeDetailsHooksComponent";

export default function EmployeeListingHooksComponent(props) {
    debugger;
    var [stateData, setstateData] = useState({
        masterEmployeeList: [],
        employeeList: [],
        hasApiError: false
    });

    useEffect(() => {
        Axios.get("http://localhost:4000/employees").then((response) => {
            setstateData({
                employeeList: response.data,
                masterEmployeeList: response.data,
                textValue: ""
            })
        }, (errorResponse) => {
            alert(errorResponse.code)
            setstateData({
                ...stateData,
                hasApiError: true
            })
        });
    }, [])

    function deleteEmployee(employeeToDelete) { 

        Axios.delete("http://localhost:4000/employees/" + employeeToDelete).then(() => {
            alert("Employee Got Deleted...");

            var newArray = stateData.masterEmployeeList.filter((employee) => {
                return employee.id !== employeeToDelete;
            });

            setstateData({
                ...stateData,
                employeeList: newArray,
                masterEmployeeList: newArray
            }, () => {
                var filteredEmployees = stateData.employeeList.filter((employee) => {
                    return employee.name.toLowerCase().indexOf(stateData.textValue.toLowerCase()) > -1
                })
        
                setstateData({
                    ...stateData,
                    employeeList: filteredEmployees
                })
            })
    
        }, () => {
            alert("Error Deleting Employee....")
        })
    }

    function filterData(filterTextValue) {
        var filteredEmployees = stateData.masterEmployeeList.filter((employee) => {
            return employee.name.toLowerCase().indexOf(filterTextValue.toLowerCase()) > -1
        })

        setstateData({
            ...stateData,
            employeeList: filteredEmployees
        })
    }

    function refreshFrontend() {
        Axios.get("http://localhost:4000/employees").then((response) => {
            setstateData({
                employeeList: response.data,
                masterEmployeeList: response.data
            })
        })
    }


    return (
        <div style={{margin: "20px"}}>

            <AddEmployeeComponent refreshFrontend={refreshFrontend}></AddEmployeeComponent><br/><br/>

            <FilterEmployeeComponent filterData={filterData}></FilterEmployeeComponent>

            {stateData.employeeList.map((employee) => {
                return (
                    <EmployeeDetailsComponent employee={employee} deleteEmployee={deleteEmployee}></EmployeeDetailsComponent>
                )
            })}

            {stateData.hasApiError && <h1>Error Retieving Data from APIs</h1>}
        </div>
    )
}