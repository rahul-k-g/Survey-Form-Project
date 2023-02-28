import React from "react";
import more from "../images/next@2x.jpg";
import "./Header.css";
function Header() {
  return (
    <>
      <div className="header">
        <p className="logo">LOGO</p>
        <div className="user">
          <img src="" alt=""/>
          <i className="fa fa-user"></i>
          <i className="fa fa-angle-down"></i>
        </div>
      </div>
    </>
  );
}

export default Header;
