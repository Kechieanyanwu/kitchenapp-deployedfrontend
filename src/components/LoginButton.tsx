export default function LoginButton() {

    const handleClick = () => {
        window.alert("WIP login button")
    }
    return (
        <div className="login-button" onClick={handleClick}> <p>Log In</p></div>
    )
}