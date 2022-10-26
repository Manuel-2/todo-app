import React from "react";

// components
import { Quote } from "./Components/Quote/Quote";
import { Todo } from "./Components/Todo/Todo";
import { TodoTab } from "./Components/TodoTab/TodoTab";
import { Modal } from "./Components/Modal/Modal";

//styles
import "./App.css";
import { ReactComponent as AppLogo } from "./Assets/Icons/AppLogo.svg";
import { TodoForm } from "./Components/TodoForm/TodoForm";

function App() {
  return (
    <React.Fragment>
      <header className="app-header">
        <h1 className="app-header__title">
          Todo App <AppLogo className="app-header-logo" />
        </h1>
        <Quote></Quote>
      </header>
      <main className="todos-section">
        <p className="todos-section__stats">
          You have completed {0} of {0} todos
        </p>
        <section className="todos-section__main">
          <div className="todos-section__main__tabs-container">
            <TodoTab id="tab-all" categoryName="All" amount={0} />
            <TodoTab id="tab-pending" categoryName="Pending" amount={0} />
            <TodoTab id="tab-done" categoryName="Done" amount={0} />
          </div>
          <div className="todos-container">
            <Todo id={1} completed todoText={"hacer los diseños"}></Todo>
            <Todo id={2} todoText={"implementar la app"}></Todo>
          </div>
        </section>
        <button className="create-todo-btn">+</button>
      </main>
      <Modal containerId="modal">
        <TodoForm placeholder="insert text here" />
      </Modal>
    </React.Fragment>
  );
}

export { App };
