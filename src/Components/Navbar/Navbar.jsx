import React, { useEffect, useState } from "react";
import user from "../img/user.svg";
import iconFon from "../img/icon_fon.svg";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import newFon from "../img/update_fon.svg";
const Navbar = ({ update, setUpdate }) => {
  const style = {
    background: "black",
    color: "white",
  };
  let color = update.color;
  // console.log(color);
  const style1 = {
    background: "white",
    color: "black",
  };
  return (
    <>
      <div className="navbar1" style={update}>
        <div className="nav">
          <div className="nav_left">
            <li>Logo</li>
          </div>
          <div className="nav_center">
            <ul>
              <NavLink to="/home">
                <li>Home</li>
              </NavLink>
              <NavLink to="/popular">
                <li>Books</li>
              </NavLink>
              <NavLink to="/myLibary">
                <li>My library</li>
              </NavLink>
              <NavLink to="/addBook">
                <li>Add my book </li>
              </NavLink>
              <li>Contacts</li>
            </ul>
          </div>
          <div className="nav_right">
            <input
              style={{ color: color }}
              className="search"
              type="text"
              placeholder="Start to add a symbols"
            />

            <Link to="/registration">
              <img className={color} src={user} alt="userIcon" />
            </Link>
            <button
              style={{ border: "none", background: "none" }}
              onClick={() => setUpdate(style)}>
              <img src={iconFon} alt="iconUpdate" />
            </button>
            <button
              style={{
                height: "50px",
                filter: "invert(1)",
                border: "none",
                background: "none",
              }}
              onClick={() => setUpdate(style1)}>
              <img
                style={{
                  height: "40px",
                }}
                src={newFon}
                alt="iconUpdate"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
