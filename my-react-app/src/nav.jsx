
import React from "react";
import './nav.css';

export const Nav = () => {
  return (
    <nav className="navbar">
        <ul className="nav-list">
            <li className="nav-item"><a href="/">color-1</a></li>
            <li className="nav-item"><a href="/color-1">color-2</a></li>
            <li className="nav-item"><a href="/color-2">color-3</a></li> 
        </ul>
    </nav>
  );
}
