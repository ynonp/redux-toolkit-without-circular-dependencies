import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import addTodo from "./addTodo";

export interface Todo {
  id: string;
  message: string;
  completed: boolean;
}

const todos = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    deleteTodo: (state, action: PayloadAction<string>) =>
      state.filter((todo) => todo.id !== action.payload),
    completeTodo: (state, action: PayloadAction<string>) => {
      const completedTodo = state.find((todo) => todo.id === action.payload);
      if (completedTodo) {
        completedTodo.completed = true;
      }
    },
    sort: (state) => state.sort((a, b) => a.message.localeCompare(b.message))
  },
  extraReducers: (build) => {
    build.addCase(addTodo, (state, action) => {
      state.push({ id: nanoid(), message: action.payload, completed: false });
    });
  }
});

export default todos;
