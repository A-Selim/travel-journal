import React from "react";
import navIcon from "../assets/nav-icon.png";

export default function Nav() {
  return (
    <nav className="nav">
      <img src={navIcon} alt="" className="nav-img" />
      <h1 className="nav-title">My Travel Journal</h1>
    </nav>
  );
}
