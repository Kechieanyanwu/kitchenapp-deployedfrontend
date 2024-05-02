import NotificationButton from "./NotificationButton";
export default function HomeHeader() {
    return (
        <div className="checklist-header">
            <div className="text">
                <h3>Welcome!</h3>
                <h5>Adding anything to the list today?</h5>
            </div>
            <div className="notification">
                <NotificationButton />
            </div>
        </div>
    )
}