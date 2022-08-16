import HeaderComponent from "../components/HeaderComponent";
import NavigationComponent from "../components/NavigationComponent";
import ContentComponent from "../components/ContentComponent";
import FooterComponent from "../components/FooterComponent";
import { BrowserRouter } from "react-router-dom";


export default function ContainerComponent() {
    return (
        
            <div>
                <HeaderComponent></HeaderComponent>

                <BrowserRouter>
                    <div>
                        <NavigationComponent></NavigationComponent>

                        <div style={{margin: "5px", padding: "10px", border: "1px solid red", height: "600px", overflowY: "auto"}}>
                            <ContentComponent></ContentComponent>
                        </div>
                    </div>
                </BrowserRouter>
                
                <FooterComponent></FooterComponent>
            </div>
    )
}