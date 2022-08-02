import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className="nav_links">
          <li className="nav_link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav_link">
            <NavLink to="/tweets">Twitters</NavLink>
          </li>
          <li className="nav_link">
            <NavLink to="/photos">Photos</NavLink>
          </li>
          <li className="nav_link">
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
