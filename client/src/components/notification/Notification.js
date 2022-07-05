import { useState, forwardRef, useImperativeHandle } from "react";
import "./Notification.css";

const Notification = forwardRef((props, ref) => {
    const [showNotification, setShowNotification] = useState(false);

    useImperativeHandle(ref, () => ({
        show() {
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 3000)
        }
    }));

    return (
        <div className={showNotification ? "notification show" : "notification hide"}>{props.message}
        </div>
    );
})

export default Notification;