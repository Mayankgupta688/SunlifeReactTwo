import React from 'react';

export default class EmployeeDetailsComponent extends React.Component {

    triggerEmployeeDeleteFunction = (event) => {
        this.props.deleteEmployee(event.target.name)
    }

    render() {
        return (
            <div className="card">
                <img src="https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg" className="card-img-top" alt={this.props.employee.name} />
                <div className="card-body">
                    <ShowName name={this.props.employee.name}></ShowName>
                    <p className="card-text">Employee Id is <b>{this.props.employee.id}</b> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <input type="button" name={this.props.employee.id} value={ "Delete " + this.props.employee.name } className="btn btn-primary" onClick={this.triggerEmployeeDeleteFunction} />
                </div>
            </div>
        )
    }
}

function ShowName(props) {
    return <h5 style={{color: "green"}} className="card-title">Name: {props.name}</h5>
}