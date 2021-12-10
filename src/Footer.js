import React from "react";
// import logo from "./logo-no-bg.png";
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
        {/* <img src={logo} alt="SquiggleCode logo" className="img-fluid" />
        href="https://github.com/TreeLife8/todo-list"
        target="_blank"
        rel="noreferrer"
      >
        {" "} */}
        Regina Maher and is open sourced on GitHub
      </a>
    </div>
  );
}
