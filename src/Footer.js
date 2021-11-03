import React from "react";
import logo from "./logo-no-bg.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer container-fluid">
      <hr />
      <span>crafted by</span>{" "}
      <img src={logo} alt="SquiggleCode logo" className="img-fluid" />
    </div>
  );
}
