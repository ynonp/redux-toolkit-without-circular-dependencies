import { createAsyncThunk } from "./store";
import addTodo from "./addTodo";

export default createAsyncThunk(
  "todos/later",
  async (text: string, { getState, dispatch }) => {
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 1000);
    });
    const numberOfTodos = getState().todos.length;
    dispatch(addTodo(`[${numberOfTodos}] - ${text}`));
  }
);
