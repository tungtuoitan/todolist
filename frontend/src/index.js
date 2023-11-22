import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ToDoList from "./component/todolist";
import { store } from "./app/store";
import { Provider } from "react-redux";
import ToDoPage from "./page/toDoPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToDoPage />
  </Provider>
);
