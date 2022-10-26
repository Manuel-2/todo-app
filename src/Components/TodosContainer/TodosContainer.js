import React from "react";

import { globalContext } from "../GlobalContext/GlobalContext";
import { loadStateEnum } from "../../Utils/useLocalStorage/useLocalStorage";

import { Todo } from "../Todo/Todo";

function TodosContainer(props) {
  const { todos, loadState } = React.useContext(globalContext);

  let elementsToRender = [];
  if (loadState === loadStateEnum.loading) {
    for (let i = 0; i < 3; i++) {
      elementsToRender.push(<h2 key={i}>cargando..</h2>);
    }
  }
  if (loadState === loadStateEnum.complete) {
    elementsToRender = todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          todoText={todo.text}
        ></Todo>
      );
    });
  }

  return <div className="todos-container">{elementsToRender}</div>;
}

export { TodosContainer };
