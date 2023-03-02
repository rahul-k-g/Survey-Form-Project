import React from "react";
import more from "../images/next@2x.jpg";
import "./Header.css";
function Header() {
  return (
    <>
      <div className="header">
        <p className="logo">LOGO</p>
        <div className="user">
        <button className="logout ">Logout</button>
          <i className="fa fa-angle-down"></i>
        </div>
      </div>
    </>
  );
}

export default Header;
