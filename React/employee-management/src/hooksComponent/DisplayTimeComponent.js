import { useState } from "react";

export default function DisplayTimeComponent() {
    debugger;
    function returnCurrentTime() {
        return new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds();
    }

    setTimeout(() => {
        var time = returnCurrentTime();
        setData({
            counter: data.counter + 1,
            currentTime: returnCurrentTime()
        });
        console.log(time)
    }, 1000);

    
    var [data, setData] = useState({
        counter: 0,
        currentTime: returnCurrentTime()
    });

    return (
        <div>
            <h1>Current Time is {data.currentTime}</h1>
            <h1>Counter is {data.counter}</h1>
        </div>
    )
}