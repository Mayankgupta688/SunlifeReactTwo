export default function EmployeeDetailsComponent(props) {
    return (
        <div>
            <h1>New Employee Id is {props.employee.id}</h1>
            <h2>Employee Name is {props.employee.name}</h2><hr/>
        </div>
    )
}