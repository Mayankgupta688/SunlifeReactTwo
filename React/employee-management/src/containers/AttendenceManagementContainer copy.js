import ContentComponent from "../components/ContentComponent";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";

export default function AttendenceManagementContainer() {
    return (
        <div>
            <h1>This is Attendence Management</h1><hr/>
            <HeaderComponent></HeaderComponent>
            <ContentComponent></ContentComponent>
            <FooterComponent></FooterComponent>
        </div>
    )
}