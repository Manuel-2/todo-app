import React from "react";
import { globalContext } from "../GlobalContext/GlobalContext";

function TodoTab(props) {
  const { currentTab, setTab } = React.useContext(globalContext);

  const selectTab = (event) => {
    const selectedTab = event.currentTarget.getAttribute("id");
    setTab(selectedTab);
  };

  let elementClasses = "todo-tab";
  if (currentTab === props.id) {
    elementClasses += " selected";
  }
  return (
    <button className={elementClasses} id={props.id} onClick={selectTab}>
      <p className="todo-tap__text">{props.categoryName}</p>
      <span className="todo-tap__counter">{props.amount}</span>
    </button>
  );
}

export { TodoTab };
