import React from "react";
import Person2Icon from "@mui/icons-material/Person2";
import "./Header.css";
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";

function Header() {
  const navigate = useNavigate()
  const HandleLogout = () => {
    localStorage.removeItem("jwt");
    window.location.reload();
  };
  useEffect(()=>{
    if(!localStorage.getItem("jwt")){
        navigate('/')
    }
}, [])
  
const y = localStorage.getItem("user")
const z = JSON.parse(y)
const em = z.email
const na=em.split("@")[0]
console.log(na)
console.log(JSON.parse(y))
  return (
    <>
      <div className="header">
        <p className="logo">LOGO</p>
        <div className="user">
          <button className="logout " onClick={HandleLogout}>
            Logout
          </button>
          <Person2Icon />
          <i className="fa fa-angle-down"></i>
        </div>
      </div>
    </>
  );
}

export default Header;
