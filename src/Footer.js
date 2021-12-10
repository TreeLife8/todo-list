import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer container-fluid">
      <hr />
      <span>crafted by</span>{" "}
      <a
        href="https://github.com/regina-maher/todo-list"
        target="_blank"
        rel="noreferrer"
      >
        Regina Maher and is open sourced on GitHub
      </a>
    </div>
  );
}
