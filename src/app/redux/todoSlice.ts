import { createSlice } from "@reduxjs/toolkit";


export type TodoProps = {
  id: string,
  text: string,
  completed: boolean
}

const initialState: TodoProps[] = []


const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: self.crypto.randomUUID(), text: action.payload, completed: false });
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
