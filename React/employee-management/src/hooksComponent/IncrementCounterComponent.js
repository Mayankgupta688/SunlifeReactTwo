import React, { useState } from "react";

export default function IncrementCounterComponent() {
    var [counter, setCounter] = useState(0);

    function incrementCounterComponent() {

        // First Method
        // setCounter((counter) => {
        //     return counter + 1;
        // })
 
        // Second Method
        setCounter(counter + 1)
    }

    return (
        <div>
            <h1>Counter Value is {counter}</h1>
            <input type="button" onClick={incrementCounterComponent} value= "Increment Counter" />
        </div>
    )
}