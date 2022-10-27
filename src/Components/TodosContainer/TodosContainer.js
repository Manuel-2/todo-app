import React from "react";

import { globalContext } from "../GlobalContext/GlobalContext";
import { loadStateEnum } from "../../Utils/useLocalStorage/useLocalStorage";

import { Todo } from "../Todo/Todo";
import { TodoLoadingSkeleton } from "../TodoLoadingSkeleton/TodoLoadingSkeleton";

function TodosContainer(props) {
  const { todos, loadState, searchValue } = React.useContext(globalContext);

  let elementsToRender = [];
  if (loadState === loadStateEnum.loading) {
    for (let i = 0; i < 6; i++) {
      elementsToRender.push(<TodoLoadingSkeleton key={i} />);
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
    if (searchValue.length > 0) {
      const filterList = elementsToRender.filter((todo) => {
        const todoText = todo.props.todoText.toLowerCase();
        const todoSearchValue = searchValue.toLowerCase();
        return todoText.includes(todoSearchValue);
      });
      elementsToRender = filterList;
    }
  }

  return <div className="todos-container">{elementsToRender}</div>;
}

export { TodosContainer };
