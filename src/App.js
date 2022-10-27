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
  const [currentTab, setTab] = React.useState("tab-all");
  const [alert, setAlert] = React.useState({
    message: "",
    visible: false,
  });

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
        setSearchValue,
        currentTab,
        setTab,
        alert,
        setAlert,
      }}
    >
      <AppUi />
    </GlobalContextProvider>
  );
}

export { App };
