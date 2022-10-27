import React from "react";
import { globalContext } from "../GlobalContext/GlobalContext";

function TodoForm(props) {
  const { setModalVisible, todos, setTodos } = React.useContext(globalContext);

  const cancelTodo = (event) => {
    document.getElementById("todo-text-input").value = "";
    setModalVisible(false);
  };

  const createTodo = (event) => {
    event.preventDefault();
    const todoTextValue = document.getElementById("todo-text-input").value;
    if (todoTextValue.length === 0) {
      // Todo: show a warn to the user
      return;
    }
    const newTodo = {
      completed: false,
      text: todoTextValue,
      id: Date.now(),
    };
    const newTodoList = [...todos];
    newTodoList.push(newTodo);
    setTodos(newTodoList);
    localStorage.setItem("todos_01", JSON.stringify(newTodoList));
    cancelTodo();
  };

  return (
    <form className="create-todo-form" id="createTodoForm">
      <input
        className="create-todo-form__input"
        type={"text"}
        placeholder={props.placeholder}
        id="todo-text-input"
      ></input>
      <div className="create-todo-form__buttons-container">
        <input
          className="create-todo-form__cancel-btn create-todo-form-btn button"
          type={"button"}
          value="Cancel"
          onClick={cancelTodo}
        ></input>
        <input
          className="create-todo-form__sumbit-btn create-todo-form-btn button"
          type={"submit"}
          value="Create"
          onClick={createTodo}
        ></input>
      </div>
    </form>
  );
}

export { TodoForm };
