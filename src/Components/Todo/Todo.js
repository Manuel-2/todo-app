import React from "react";
import { ReactComponent as DeleteIcon } from "../../Assets/Icons/DeleteIcon.svg";
import { globalContext } from "../GlobalContext/GlobalContext";

function Todo(props) {
  const { todos, setTodos } = React.useContext(globalContext);

  const toggleCompleteTodo = (event) => {
    const todoId = Number(
      event.currentTarget.parentElement.getAttribute("data-todo-id")
    );
    const todosCopy = [...todos];
    const currentTodo = todosCopy.find((todo) => todo.id === todoId);
    currentTodo.completed = !currentTodo.completed;
    setTodos(todosCopy);
    localStorage.setItem("todos_01", JSON.stringify(todosCopy));
  };

  const deleteTodo = (event) => {
    const todoId = Number(
      event.currentTarget.parentElement.getAttribute("data-todo-id")
    );
    const todosCopy = todos.filter((todo) => todo.id !== todoId);
    setTodos(todosCopy);
    localStorage.setItem("todos_01", JSON.stringify(todosCopy));
  };

  let todoClasses = "todo-item";
  if (props.completed) {
    todoClasses += " checked";
  }
  return (
    <div className={todoClasses} data-todo-id={props.id}>
      <button
        onClick={toggleCompleteTodo}
        className="todo-item__check-btn"
      ></button>
      <p className="todo-item__text">{props.todoText}</p>
      <button onClick={deleteTodo} className="todo-item__delete-btn">
        <DeleteIcon className="todo-item__delete-btn__icon"></DeleteIcon>
      </button>
    </div>
  );
}

export { Todo };
