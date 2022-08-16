import { Link } from "react-router-dom";
export default function NavigationComponent() {
    return (
        <div>
            <nav>
                <Link style={{margin: "10px"}} to="/home">Home</Link>
                <Link style={{margin: "10px"}} to="/help">Help</Link>
                <Link style={{margin: "10px"}} to="/about">About</Link>
            </nav>
        </div>
    )
}