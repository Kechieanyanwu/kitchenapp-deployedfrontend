import { useNavigate } from 'react-router-dom';

export default function LoginButton() {

    const navigate = useNavigate();

    const handleClick = () => {
        window.alert("going to login page  ")
        navigate('/login')
    }

    return (
        <div className="login-button" onClick={handleClick}> <p>Log In</p></div>
    )
}