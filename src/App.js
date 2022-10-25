import React from "react";

// components
import { Quote } from "./Components/Quote/Quote";
import { Todo } from "./Components/Todo/Todo";
import { TodoTab } from "./Components/TodoTab/TodoTab";

function App() {
  return (
    <React.Fragment>
      <header className="app-header">
        <h1 className="app-header__title">Todo App</h1>
        <Quote></Quote>
      </header>
      <main className="todos-section">
        <p className="todos-section__stats">
          You have completed {0} of {0} todos
        </p>
        <section className="todos-section__main">
          <div className="todos-section__main__tabs-container">
            <TodoTab categoryName="All" amount={0} />
            <TodoTab categoryName="Pending" amount={0} />
            <TodoTab categoryName="Done" amount={0} />
          </div>
          <div className="todos-container">
            <Todo todoText={"hola"}></Todo>
          </div>
        </section>
        <button className="create-todo"></button>
      </main>
    </React.Fragment>
  );
}

export { App };
