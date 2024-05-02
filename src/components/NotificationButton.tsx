import { Bell } from "react-bootstrap-icons";

export default function NotificationButton() {
    const doSomething = () => {
        alert("Show notifications");
    }

    return (
        <span onClick={() => doSomething()}><Bell /></span>
    )
}