import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { AiOutlineBgColors } from "react-icons/ai";
import { GiWaterDrop } from "react-icons/gi";
import "./Todo.css";
import TodoForm from "./TodoForm";

export default function Todo(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const [colourBg, setColourBg] = useState({
    id: null,
    type: "grey",
  });
  const colourPallet = [
    { id: 1, shade: "aqua" },
    { id: 2, shade: "blue" },
    { id: 3, shade: "pink" },
    { id: 4, shade: "yellow" },
    { id: 5, shade: "orange" },
    { id: 6, shade: "green" },
    { id: 7, shade: "purple" },
    { id: 8, shade: "grey" },
  ];
  function submitUpdate(value) {
    props.updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
      colour: "grey",
    });
  }
  function colourButtonClickHandler(id, text, colour) {
    let newValue = {
      id: id,
      text: text,
      colour: colourPallet[colour - 1].shade,
    };
    props.updateTodo(id, newValue);
    setColourBg({ id: null, ...colour });
  }
  return (
    <div className="Todo">
      {props.todos.map((todo, index) => (
        <div>
          <div className={todo.colour}>
            <div
              className={
                todo.isComplete
                  ? "todo-row complete mt-2 mb-2"
                  : "todo-row mt-2 mb-2"
              }
              id={edit.id === todo.id ? "edit" : ""}
              key={index}
            >
              <div key={todo.id} onClick={() => props.completeTodo(todo.id)}>
                {edit.id === todo.id ? (
                  <div className="edit">
                    <TodoForm onSubmit={submitUpdate} />
                  </div>
                ) : (
                  todo.text
                )}
              </div>
              <div
                key={index + 1}
                className={edit.id === todo.id ? "hidden" : "icons d-flex"}
              >
                <RiCloseCircleLine
                  onClick={() => props.removeTodo(todo.id)}
                  className="delete-icon"
                  key={index + 2}
                />
                <TiEdit
                  onClick={() => setEdit({ id: todo.id, value: todo.text })}
                  className="edit-icon"
                  key={index + 3}
                />
                <AiOutlineBgColors
                  onClick={() => setColourBg({ id: todo.id, type: "grey" })}
                  className="colour-icon"
                  key={index + 4}
                />
              </div>
            </div>
          </div>
          {colourBg.id === todo.id ? (
            <div>
              <div className="colour-pallet">
                {colourPallet.map((colour, index) => (
                  <button
                    key={colour.id}
                    disabled={colour.clicked}
                    onClick={() =>
                      colourButtonClickHandler(todo.id, todo.text, colour.id)
                    }
                  >
                    <GiWaterDrop
                      key={index}
                      id="drop"
                      className={colour.shade}
                    />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
}
