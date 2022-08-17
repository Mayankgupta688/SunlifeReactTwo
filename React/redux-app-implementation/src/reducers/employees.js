export default function employees(employeeStore=[], action) {
    if(action.type === "add_employees") {
        return action.payload;
    }

    if(action.type === "delete_employees") {
        debugger;
        return [];
    }

    if(action.type === "deleteSpecificEmployeesFromStore") {
        return employeeStore.filter((employee) => {
            return +employee.id !== +action.payload
        })
    }

    return employeeStore;
}