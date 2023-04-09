import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addTodo from "../store/addTodo";
import { AppDispatch } from "../store/store";
import createAsyncTodo from "../store/createAsyncTodo";

const TodoInput: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      className="todoInput"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(addTodo(inputValue));
        setInputValue("");
      }}
    >
      <label htmlFor="todo-input">Enter Todo Here</label>
      <input
        id="todo-input"
        value={inputValue}
        onChange={(event) => setInputValue(event.currentTarget.value)}
      />
      <button type="submit">Add Todo</button>
      <button
        type="button"
        onClick={() => dispatch(createAsyncTodo(inputValue))}
      >
        Add todo later
      </button>
    </form>
  );
};

export default TodoInput;
