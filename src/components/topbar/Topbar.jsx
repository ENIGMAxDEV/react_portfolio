import { useState } from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
const Topbar = ({ active, setActive }) => {
  return (
    <nav className={"topbar " + (active && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            logo.
          </a>
          <div className="item-container">
            <Person className="icon" fontSize="small" />
            <span>+44 924 12 74</span>
          </div>
          <div className="item-container">
            <Mail className="icon" fontSize="small" />
            <span>web@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setActive(!active)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
