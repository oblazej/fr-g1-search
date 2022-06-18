import "./Notification.css";

function Notification(props) {

    return (
        <div className="notification">{props.message}
        </div>
    );
}

export default Notification;