function TodoForm(props) {
  return (
    <form className="create-todo-form">
      <input
        className="create-todo-form__input"
        type={"text"}
        placeholder={props.placeholder}
      ></input>
      <div className="create-todo-form__buttons-container">
        <input
          className="create-todo-form__cancel-btn create-todo-form-btn"
          type={"button"}
          value="Cancel"
        ></input>
        <input
          className="create-todo-form__sumbit-btn create-todo-form-btn"
          type={"submit"}
          value="Create"
        ></input>
      </div>
    </form>
  );
}

export { TodoForm };
