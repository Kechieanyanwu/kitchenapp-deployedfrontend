import SignUpButton from "../components/SignUpButton";
import LoginButton from "../components/LoginButton";
import { Check2Square } from "react-bootstrap-icons";
export default function Welcome() {
return (
    <div className="welcome-page">
        <div className="welcome-blurb">
            <Check2Square className="checkMate-logo" />
            <h1>CheckMate</h1>
            <h2>Let's manage your kitchen inventory</h2>
        </div>
        <div className="signup-login-buttons">
            <SignUpButton />
            <LoginButton />
        </div>
    </ div>
)
}