import "./SignIn.css";

const SignIn = () => {
  return (
    <section className="register-form">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 text">
            <h1>Welcome Page One line text Will be here</h1>
            <p>Sign in to continue access pages</p>
            <span>Don’t Have An Account?</span>
            <button>Register</button>
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
                />
              </div>
            </div>
            <div className="form-reg button">
              {" "}
              <button type="submit" className="registerbtn">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
