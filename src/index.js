import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { CreateTodoModal } from "./Components/CreateTodoModal/CreateTodoModal";

ReactDOM.createPortal(
  <CreateTodoModal />,
  document.getElementById("app_modal")
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
