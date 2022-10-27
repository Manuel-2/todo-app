import React from "react";

import { globalContext } from "../GlobalContext/GlobalContext";
import { loadStateEnum } from "../../Utils/useLocalStorage/useLocalStorage";

import { Todo } from "../Todo/Todo";
import { TodoLoadingSkeleton } from "../TodoLoadingSkeleton/TodoLoadingSkeleton";

function TodosContainer(props) {
  const { todos, loadState, searchValue, currentTab } =
    React.useContext(globalContext);

  let todosAvailable = [];

  let elementsToRender = [];

  if (loadState === loadStateEnum.loading) {
    for (let i = 0; i < 6; i++) {
      elementsToRender.push(<TodoLoadingSkeleton key={i} />);
    }
  }

  if (loadState === loadStateEnum.complete) {
    if (searchValue.length > 0) {
      const filterList = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const todoSearchValue = searchValue.toLowerCase();
        return todoText.includes(todoSearchValue);
      });
      todosAvailable = filterList;
    } else {
      todosAvailable = [...todos];
    }

    todosAvailable = todosAvailable.filter((todo) => {
      if (currentTab === "tab-all") {
        return true;
      } else if (currentTab === "tab-pending" && !todo.completed) {
        return true;
      } else if (currentTab === "tab-done" && todo.completed) {
        return true;
      }
      return false;
    });

    elementsToRender = todosAvailable.map((todo) => {
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
