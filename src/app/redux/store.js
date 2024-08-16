import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../redux/todoSlice';
import filterReducer from '../redux/filterSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
  },
});

export default store;
