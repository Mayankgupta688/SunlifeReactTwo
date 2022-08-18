export default function employees_reducer(employeeDataInStore=[], action) {
    if(action.type === "add_employees") {
        return action.payload;
    }

    if(action.type === "delete_employees") {
        debugger;
        return [];
    }

    if(action.type === "delete_employee") {
        return employeeDataInStore.filter((employee) => {
            return +employee.id !== +action.payload
        })
    }

    return employeeDataInStore;
}