import React from "react";
import ReactDOM from "react-dom";

function Modal(props) {
  return ReactDOM.createPortal(
    <div className="modal-content hide">{props.children}</div>,
    document.getElementById(props.containerId)
  );
}

export { Modal };
