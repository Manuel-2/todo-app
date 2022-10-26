import React from "react";

import { AppUi } from "./AppUi";
import { GlobalContextProvider } from "./Components/GlobalContext/GlobalContext";
import { useLocalStorage } from "./Utils/useLocalStorage/useLocalStorage";

function App() {
  const [modalIsVisible, setModalVisible] = React.useState(false);
  const {
    item: todos,
    setItem: setTodos,
    loadingState,
  } = useLocalStorage("todos_01", []);

  return (
    <GlobalContextProvider
      value={{
        modalIsVisible,
        setModalVisible,
        todos,
        setTodos,
        loadingState,
      }}
    >
      <AppUi />
    </GlobalContextProvider>
  );
}

export { App };
