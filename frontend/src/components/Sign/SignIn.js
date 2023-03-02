import "./SignIn.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [response, setResponse] = useState([]);

  const HandleLogin = async () => {
    const resp = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await resp.json();
    console.log(data);
    if (data.token) {
        localStorage.setItem("jwt", data.token)
        localStorage.setItem("user", JSON.stringify(data.user))
        // window.location.href = '/landing'
        navigate('/mainpage');
    }
    setResponse(data);
    console.log(response.message === "Login Successful");
    console.log(JSON.stringify(response) === "Login Successful");
    console.log(response.token);
  };

  return (
    <section className="register-form">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 text">
            <h1>Welcome Page One line text Will be here</h1>
            <p>Sign in to continue access pages</p>
            <span>Don’t Have An Account?</span>
            <Link to='/register'>
            <button>Register</button>
            </Link>
          </div>

          <div className="col-sm-8 form">
            <h2>Sign In</h2>
            <p>Sign in to continue access pages</p>
            <div className="formPostion">
              <div className="form-reg">
                {" "}
                <label htmlFor="email">
                  <b>Email</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  id="email"
                  required
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>

              <div className="form-reg">
                {" "}
                <label htmlFor="pass">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  name="pass"
                  id="pass"
                  required
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
            </div>
            <div className="form-reg button">
              {" "}
              <button
                onClick={HandleLogin}
                type="submit"
                className="registerbtn"
              >
                Sign in
              </button>
            </div>
            <div id="mess">
              {response.message ? (
                <div style={{ color: "red" }}>{response.message}</div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
