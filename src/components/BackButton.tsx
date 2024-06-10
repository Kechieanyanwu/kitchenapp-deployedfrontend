import { ArrowLeft } from "react-bootstrap-icons";

export default function BackButton() {
    const doSomething = () => {
        alert("Show notifications");
    }

    return (
        <span onClick={() => doSomething()}><ArrowLeft /></span>
    )
}