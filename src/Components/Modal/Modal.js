import React from "react";
import ReactDOM from "react-dom";
import { globalContext } from "../GlobalContext/GlobalContext";

function Modal(props) {
  const { modalIsVisible } = React.useContext(globalContext);
  let divClassName = modalIsVisible ? "modal-content" : "modal-content hide";

  return ReactDOM.createPortal(
    <div className={divClassName}>{props.children}</div>,
    document.getElementById(props.containerId)
  );
}

export { Modal };
