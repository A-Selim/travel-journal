import React from "react";
import icon from "../assets/icon.png"

export default function Nav() {
  return (
    <nav className="nav">
      <img src={icon} alt="" className="nav-img" />
      <h1 className="nav-title">My Travel Journal</h1>
    </nav>
  )
}