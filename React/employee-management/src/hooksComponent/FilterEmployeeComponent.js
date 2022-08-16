import React, { useState } from 'react';

export default function FilterEmployeeComponent(props) {
    var [stateData, setStateData] = useState({
        textValue: ""
    })

    var updateValue = (event) => {
        setStateData({
            textValue: event.target.value
        })

        props.filterData(event.target.value)
    }

    return (
        <div>
            <b style={{display: "inline-block", marginRight: "10px"}}>Filter Employee List</b>
            <input type="text" onChange={updateValue} value={stateData.textValue} /><br/><br/><hr/>
        </div>
    )
}