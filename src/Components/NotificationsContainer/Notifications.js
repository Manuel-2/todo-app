import React from "react";
import ReactDOM from "react-dom";

function NotificationsContainer(props) {
  return ReactDOM.createPortal(
    <div className="notifications-area">{props.children}</div>,
    document.getElementById(props.containerId)
  );
}

export { NotificationsContainer };
