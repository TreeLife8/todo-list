import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./TodoList.css";

export default function TodoList(props) {
  const [todos, setTodos] = useState([]);

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
      />
    </div>
  );
}
