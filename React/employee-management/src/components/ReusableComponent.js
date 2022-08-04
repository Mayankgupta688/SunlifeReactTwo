// Closure 
// Context
// 


export default function ReusableComponent(props) {
    
    props.userName = "TechnoFunnel"; // 1 - No (ReadOnly Property)
    
    props.userAge = 10; //2 No (ReadOnly Property)
    
    props.userInformation.userDesignation = "VP";  // 3 Yes
    
    props.userInformation = {  // 4  No
        userSalary: 1000,
        userDesignation: "Developer"
    }
    
    props.salaryArray.push(20);  //5  Yes
    
    props.salaryArray = [10, 20, 30];  // 6  No

    return (
        <div>
            <h1>User Name is { props.userName }</h1>
            <h2>User Age is { props.userAge }</h2>
            <h3>User Designation is { props.userInformation.userDesignation }</h3>
        </div>
    )
}

