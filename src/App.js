import React from "react";

import { AppUi } from "./AppUi";
import { GlobalContextProvider } from "./Components/GlobalContext/GlobalContext";
import { useLocalStorage } from "./Utils/useLocalStorage/useLocalStorage";

function App() {
  const [modalIsVisible, setModalVisible] = React.useState(false);
  const {
    item: todos,
    setItem: setTodos,
    loadState,
  } = useLocalStorage("todos_01", []);
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <GlobalContextProvider
      value={{
        modalIsVisible,
        setModalVisible,
        todos,
        setTodos,
        totalTodos,
        completedTodos,
        loadState,
        searchValue,
        setSearchValue
      }}
    >
      <AppUi />
    </GlobalContextProvider>
  );
}

export { App };
