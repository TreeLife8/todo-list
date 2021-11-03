import React, { useState, useEffect, useRef } from "react";
import "./TodoForm.css";

export default function TodoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input,
    });
    setInput("");
  }
  return (
    <div className="TodoForm">
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          className="form form-control"
          type="text"
          placeholder="add a task..."
          value={input}
          name="text"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="btn todo-btn">add</button>
      </form>
    </div>
  );
}
