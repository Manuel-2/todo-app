import React from "react";
import { ReactComponent as CrossIcon } from "../../Assets/Icons/Cross.svg";
import { globalContext } from "../GlobalContext/GlobalContext";

function AlertMessage(props) {
  const { alert, setAlert } = React.useContext(globalContext);

  const closeAlert = (event) => {
    setAlert({
      message: "",
      visible: false,
    });
  };

  let alertContainerClass = "alert-container";
  if (alert.visible) {
    alertContainerClass += " visible";
  }
  return (
    <div className={alertContainerClass}>
      <h2 className="alert-container__text">{alert.message}</h2>
      <button onClick={closeAlert} className="alert-container__close-btn">
        <CrossIcon />
      </button>
    </div>
  );
}

export { AlertMessage };
