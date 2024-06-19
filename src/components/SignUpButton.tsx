import { useNavigate } from 'react-router-dom';

export default function SignUpButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        window.alert("going to signup page  ")
        navigate('/signup')
    }

    return (
        <div className="signup-button" onClick={handleClick}><p>Sign Up</p></div>
    )
}