import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./TodoList.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const LOCAL_STORAGE_KEY = "react-todo-list-todo";
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  }
  function updateTodo(id, newValue) {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) => prev.map((item) => (item.id === id ? newValue : item)));
  }
  function updateTodoColour(taskId, Newcolour) {
    setTodos((prev) =>
      prev.map((item) => (item.id === taskId ? Newcolour : item))
    );
  }
  function removeTodo(id) {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  }
  function completeTodo(id) {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="TodoList">
      <h2>what's the plan for today?</h2>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        updateTodoColour={updateTodoColour}
      />
    </div>
  );
}
