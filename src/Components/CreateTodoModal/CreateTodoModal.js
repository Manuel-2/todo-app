function CreateTodoModal(props) {
  return (
    <div>
      <form>
        <input type={"text"} placeholder={props.placeholder}></input>
        <div>
          <input type={"button"} value="Cancel"></input>
          <input type={"submit"} value="Create"></input>
        </div>
      </form>
    </div>
  );
}

export { CreateTodoModal };
