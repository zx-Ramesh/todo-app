import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";




const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: uuid(), text: action.payload, completed: false });
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleCheck: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleCheck } = todosSlice.actions;
export default todosSlice.reducer;
