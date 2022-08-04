import EmployeeDetailsComponent from "./EmployeeDetailsComponent";
import HeaderComponent from "./HeaderComponent";

export default function EmployeeListingComponent() {
    var employeeData = [{
        "id":"26",
        "createdAt":"2019-07-09T18:08:17.841Z",
        "name":"Lyric Metz",
        "avatar":"https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg"
    }, {
        "id":"28",
        "createdAt":"2019-07-09T20:32:28.258Z",
        "name":"Efren Windler PhD",
        "avatar":"https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg"
    }, {
        "id":"29",
        "createdAt":"2019-07-10T03:43:08.857Z",
        "name":"Kenya Reichel",
        "avatar":"https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg"
    }, {
        "id":"30",
        "createdAt":"2019-07-09T18:06:41.721Z",
        "name":"Edmund Fisher",
        "avatar":"https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg"
    }]

    return (
        <div>
            <HeaderComponent></HeaderComponent><hr/>
            {employeeData.map((employee) => {
                return (
                    <EmployeeDetailsComponent employee={employee}></EmployeeDetailsComponent>
                )
            })}
        </div>
    )
}