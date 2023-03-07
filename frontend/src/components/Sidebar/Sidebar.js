import React from "react";
import Groups3Icon from "@mui/icons-material/Groups3";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import "./Sidebar.css";
import logout from "../images/logoutimages.jpg";

function Sidebar() {
  return (
    <>
      <div className="sidenav">
        <HomeIcon />
        <Groups3Icon />
        <ListIcon />
      </div>
    </>
  );
}

export default Sidebar;
