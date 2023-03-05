import React from "react";
import Person2Icon from "@mui/icons-material/Person2";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import profile from "../images/profileimage.jpg";
import { Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [image, setImage] = useState([]);

  const HandleLogout = () => {
    localStorage.removeItem("jwt");
    window.location.reload();
  };
  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      navigate("/");
    }
  }, []);

  const y = localStorage.getItem("user");
  const z = JSON.parse(y);
  const em = z.email;
  const na = em.split("@")[0];
  console.log(na);
  console.log(JSON.parse(y));

  //for profile pic change

  useEffect(() => {
    fetchData();
  }, []);

  const user = localStorage.getItem("user");
  console.log(user);

  const fetchData = async () => {
    await fetch(`https://surveyformprojectbackend.onrender.com/api/profilepic/${user}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImage(data.profileImg);
      });
  };

  return (
    <>
      <div className="header">
        <p className="logo">LOGO</p>
        <div className="user">
          <button className="logout " onClick={HandleLogout}>
            Logout
          </button>
          {/* <Person2Icon /> */}

          <Link to="/profile">
            {image && <img src={image} alt="profilepic" width="35px" /> }
            {image === "" && <Person2Icon />}
          </Link>
          <Link to="/profile">
            <button className="addImage">Change Profile</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
