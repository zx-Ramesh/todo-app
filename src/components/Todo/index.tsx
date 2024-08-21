"use client";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { setFilter } from '@/app/redux/filterSlice';
import { addTodo, deleteTodo, toggleCheck } from '@/app/redux/todoSlice';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';



const Todo = () => {
  
  const filterTagsTask = ["All", "Active", "Completed"];
  const todos = useAppSelector((state) => state.todos);
  const filter = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  console.log("todos", todos)

  const filteredTodos = todos?.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <div className="w-[70%] h-[70%] bg-white rounded-lg shadow-lg flex ">
      <div className="w-1/5 pt-24 pl-11">
        {filterTagsTask.map((tName) => (
          <p
            key={tName}
            className={filter === tName ? "text-primary cursor-pointer" : ""}
            onClick={() => dispatch(setFilter(tName))}
          >
            {tName}
          </p>
        ))}
      </div>
      <div className="w-[2px] bg-primary-100 h-full"></div>
      <div className="flex flex-col gap-2 w-4/5 ml-8 mt-8">
        <h1 className="text-4xl font-semibold">All Tasks</h1>
        <input
          type="text"
          placeholder="Add a new task inside ‘All’ category"
          className="w-[90%] p-2 bg-[#F3F3F3]"
          onKeyDown={(e: any ) => {
            if (e.key === "Enter" && e.target.value) {
              dispatch(addTodo(e.target.value));
              e.target.value = "";
            }
          }}
        />
        <div className="flex flex-col gap-2">
          {filteredTodos && filteredTodos.length > 0 ? (
            filteredTodos.map((task) => (
              <div className="flex justify-between w-[90%] pr-4" key={task.id}>
                <div className="flex items-center gap-5">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    className="border border-solid border-red-400 h-7 w-7 rounded-lg"
                    onChange={() => dispatch(toggleCheck(task.id))}
                  />
                  <span className={task.completed ? "completed" : ""}>
                    {task.text}
                  </span>
                </div>
                <RiDeleteBin6Line
                  color="red"
                  onClick={() => dispatch(deleteTodo(task.id))}
                />
              </div>
            ))
          ) : (
            <p>No tasks available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
