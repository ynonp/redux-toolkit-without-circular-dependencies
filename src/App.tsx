import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>A simple todo list app to experiment with Redux Toolkit</h2>
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
}
