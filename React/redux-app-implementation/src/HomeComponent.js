import React from 'react';
import Axios from "axios";

import * as actions from "./actions/employeesAction"

import { connect } from 'react-redux';

class HomeComponent extends React.Component {  
    
    getEmployees() {
        Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login").then((response) => {
            this.props.addEmployeesToStore(response.data)
        })
    }

    deleteAllEmployees() {
        debugger;
        this.props.deleteEmployeesFromStore()
    }

    render() {
        return (
            <>
                <h1>List of Employees is Given Below</h1>
                {this.props.emp.map((employee) => {
                    return (
                        <>
                            <h2>Employee Name is {employee.name}</h2>
                        </>
                    )
                })}
                <input type="button" value="Get Data From Axios" onClick={this.getEmployees.bind(this)} />
                <input type="button" value="Delete From Store" onClick={this.deleteAllEmployees.bind(this)} />
            </>
        )
    }
}

function mapStoreToProps(store) {
    return {
        emp: store.employees
    }
}

export default connect(mapStoreToProps, actions)(HomeComponent)