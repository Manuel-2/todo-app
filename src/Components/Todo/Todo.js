import { ReactComponent as DeleteIcon } from "../../Assets/Icons/DeleteIcon.svg";

function Todo(props) {
  let todoClasses = "todo-item";
  if (props.completed) {
    todoClasses += " checked";
  }

  return (
    <div className={todoClasses}>
      <button className="todo-item__check-btn"></button>
      <p className="todo-item__text">{props.todoText}</p>
      <button className="todo-item__delete-btn">
        <DeleteIcon className="todo-item__delete-btn__icon"></DeleteIcon>
      </button>
    </div>
  );
}

export { Todo };
