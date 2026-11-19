
import React from "react";
import './nav.css';

export const Nav = () => {
  return (
    <nav className="navbar">
      <h2 className="nav-title">My React App</h2>
        <ul className="nav-list">
            <li className="nav-item"><a href="/">color-1</a></li>
            <li className="nav-item"><a href="/#root">color-2</a></li>
            <li className="nav-item"><a href="/#store-4">color-3</a></li> 
        </ul>
    </nav>
  );
}
