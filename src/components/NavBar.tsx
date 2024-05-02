import { House, ListCheck, List } from "react-bootstrap-icons";


export default function NavBar() {
    const doSomething = () => { };
    return (
        <nav>
            {/* Navigation links */}
            <div
                className='footer-button active'
                onClick={() => doSomething()}
            >
                <House></House>
                <div>Home</div>
            </div>

            <div
                className='footer-button'
                onClick={() => doSomething()}
            >
                <ListCheck></ListCheck>
                <div>Checklist</div>
            </div>

            <div
                className='footer-button'
                onClick={() => doSomething()}
            >
                <List></List>
                <div>Inventory</div>
            </div>

            <div
                className='footer-button'
                onClick={() => doSomething()}
            >
                <House></House>
                <div>Settings</div>
            </div>
        </nav>
    );
};
