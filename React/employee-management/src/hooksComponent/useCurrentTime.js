import { useState } from "react";

export default function useCurrentTime() {
    function returnCurrentTime() {
        return new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds();
    }

    var [time, setTime] = useState(returnCurrentTime());

    setTimeout(() => {
        setTime(returnCurrentTime())
    }, 1000)

    return [time];
}