function TodoTab(props) {
  return (
    <div className="todo-tab" id={props.id}>
      <p className="todo-tap__text">{props.categoryName}</p>
      <span className="todo-tap__counter">{props.amount}</span>
    </div>
  );
}

export { TodoTab };
