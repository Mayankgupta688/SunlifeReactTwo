export function addEmployeesToStore(employeeList) {
    return {
        type: "add_employees",
        payload: employeeList
    }
}

export function deleteEmployeesFromStore() {
    debugger;
    return {
        type: "delete_employees"
    }
}

export function deleteSpecificEmployeesFromStore(employeeId) {
    return {
        type: "delete_employee",
        payload: employeeId
    }
}