
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, text: 'Get a new helmet', completed: false },
    { id: 2, text: 'Purchase Milk & Corn Flakes', completed: true },
    { id: 3, text: 'Pay mortgage', completed: false },
    { id: 4, text: 'Complete Assignments', completed: false },
    { id: 5, text: 'Replace laptop\'s screen', completed: true },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: state.length + 1, text: action.payload, completed: false });
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    toggleCheck: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleCheck } = todosSlice.actions;
export default todosSlice.reducer;
