import React from "react";

const globalContext = React.createContext();

function GlobalContextProvider(props) {
  return (
    <globalContext.Provider value={props.value}>
      {props.children}
    </globalContext.Provider>
  );
}

export { GlobalContextProvider, globalContext };
