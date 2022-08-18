import React from 'react';
import { connect } from 'react-redux';

class ListComponent extends React.Component {  

    render() {
        return (
            <>
                <h1>Number of Employees are: {this.props.employees.length}</h1>
            </>
        )
    }
}


function mapStoreToProps(store) {
    return {
        employees: store.employees
    }
}

export default connect(mapStoreToProps, null)(ListComponent)