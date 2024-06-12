import { useNavigate, useLocation } from 'react-router-dom';
import { House, ListCheck, List, Gear } from "react-bootstrap-icons";


export default function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <nav>
            {/* Navigation links */}
            <div
                className = {`footer-button ${location.pathname === '/' ? 'active' : ''}`}
                onClick={() => navigate("/")}
            >
                <House></House>
                <div>Home</div>
            </div>

            <div
                className = {`footer-button ${location.pathname === '/checklist' ? 'active' : ''}`}
                onClick={() => navigate("/checklist")}
            >
                <ListCheck></ListCheck>
                <div>Checklist</div>
            </div>

            <div
                className = {`footer-button ${location.pathname === '/inventory' ? 'active' : ''}`}
                onClick={() => navigate("/inventory")}
            >
                <List></List>
                <div>Inventory</div>
            </div>

            <div
                className = {`footer-button ${location.pathname === '/settings' ? 'active' : ''}`}
                onClick={() => window.alert("WIP Settings!")}
            >
                <Gear></Gear>
                <div>Settings</div>
            </div>
        </nav>
    );
};
