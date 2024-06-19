import LoginForm from "../components/LoginForm";
import { Check2Square } from "react-bootstrap-icons";

export default function Login() {
    return (
        <div className="login-page">
            <div className="login-blurb" >
                <Check2Square className="checkMate-logo" />
                <h1>Log In</h1>
            </div>
            <LoginForm />
        </div>
    )
}