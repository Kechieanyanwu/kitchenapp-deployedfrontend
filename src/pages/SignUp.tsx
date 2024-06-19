import SignUpForm from "../components/SignUpForm";
import { Check2Square } from "react-bootstrap-icons";

export default function SignUp() {
    return (

        <div className="signup-page">
            <div className="signup-blurb" >
                <Check2Square className="checkMate-logo" />
                <h1>Sign Up</h1>
            </div>
            <SignUpForm />
        </div>
    )
}