import React from "react";

// components
import { Quote } from "./Components/Quote/Quote";
import { SearchBar } from "./Components/ShearchBar/SearchBar";
import { TodoTab } from "./Components/TodoTab/TodoTab";
import { TodosContainer } from "./Components/TodosContainer/TodosContainer";
import { CreateTodoButton } from "./Components/CreateTodoButton/CreateTodoButton";
import { Modal } from "./Components/Modal/Modal";
import { TodoForm } from "./Components/TodoForm/TodoForm";
import { globalContext } from "./Components/GlobalContext/GlobalContext";

//styles
import "./App.css";
import { ReactComponent as AppLogo } from "./Assets/Icons/AppLogo.svg";

function AppUi(props) {
  const { completedTodos, totalTodos } = React.useContext(globalContext);
  const pendingTodos = totalTodos - completedTodos;

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
          You have completed {completedTodos} of {totalTodos} todos
        </p>
        <SearchBar placeholder="find todos" />
        <section className="todos-section__main">
          <div className="todos-section__main__tabs-container">
            <TodoTab id="tab-all" categoryName="All" amount={totalTodos} />
            <TodoTab
              id="tab-pending"
              categoryName="Pending"
              amount={pendingTodos}
            />
            <TodoTab
              id="tab-done"
              categoryName="Done"
              amount={completedTodos}
            />
          </div>
          <TodosContainer />
        </section>
        <CreateTodoButton></CreateTodoButton>
      </main>
      <Modal containerId="modal">
        <TodoForm placeholder="insert text here" />
      </Modal>
    </React.Fragment>
  );
}

export { AppUi };
