import React from "react";
import { globalContext } from "../GlobalContext/GlobalContext";

function CreateTodoButton(props) {
  const { modalIsVisible, setModalVisible } = React.useContext(globalContext);

  const toggleModalVisibility = (event) => {
    setModalVisible(!modalIsVisible);
  };

  return (
    <button onClick={toggleModalVisibility} className="create-todo-btn button">
      +
    </button>
  );
}

export { CreateTodoButton };
