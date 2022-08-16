import React from 'react';

export default function EmployeeDetailsHooksComponent(props) {

    function triggerEmployeeDeleteFunction(event) {
        props.deleteEmployee(event.target.name)
    }

    return (
        <div className="card">
            <img src="https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg" className="card-img-top" alt={props.employee.name} />
            <div className="card-body">
                <ShowName name={props.employee.name}></ShowName>
                <p className="card-text">Employee Id is <b>{props.employee.id}</b> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <input type="button" name={props.employee.id} value={ "Delete " + props.employee.name } className="btn btn-primary" onClick={triggerEmployeeDeleteFunction} />
            </div>
        </div>
    )
}

function ShowName(props) {
    return <h5 style={{color: "green"}} className="card-title">Name: {props.name}</h5>
}