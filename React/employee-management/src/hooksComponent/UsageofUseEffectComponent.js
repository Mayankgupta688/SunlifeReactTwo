import {useState, useEffect} from "react";

export default function UsageofUseEffectComponent() {
    var [userName, setUserName] = useState("");
    var [userAge, setUserAge] = useState("");
    var [userDesignation, setUserDesignation] = useState("");
    var [userSalary, setUserSalary] = useState("");

    useEffect(() => {
        console.log("Initial")
    }, [])

    useEffect(function genericDataUpdate(){
        console.log("Every Time")
    })

    useEffect(() => {
        console.log("Every Time Again")
    })

    useEffect(function updateOnNameChange() {
        console.log("UserName updated")
    }, [userName])

    useEffect(() => {
        console.log("UserAge/userSalary updated")
    }, [userAge, userSalary])

    useEffect(() => {
        console.log("userAge/userDesignation updated")
    }, [userAge, userDesignation])

    useEffect(() => {
        console.log("userSalary updated")
    }, [userSalary])

    function updateText(event) {
        if(event.target.id === "UserName") {
            setUserName(event.target.value)
        }

        if(event.target.id === "UserAge") {
            setUserAge(event.target.value)
        }

        if(event.target.id === "UserDesignation") {
            setUserDesignation(event.target.value)
        }

        if(event.target.id === "UserSalary") {
            setUserSalary(event.target.value)
        }
    }

    return (
        <div>
            User Name is<input type="text" value={userName} onChange={updateText} id="UserName"/><br/><br/>
            User Age is<input type="text" value={userAge} onChange={updateText} id="UserAge"/><br/><br/>
            User Designation is<input type="text" value={userDesignation} onChange={updateText} id="UserDesignation"/><br/><br/>
            User userSalary is<input type="text" value={userSalary} onChange={updateText} id="UserSalary"/><br/><br/>
        </div>
    )
}