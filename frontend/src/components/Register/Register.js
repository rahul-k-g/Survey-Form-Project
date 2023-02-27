import './Register.css';

function Register() {
  return (

 <section className="register-form">
<div className="container">
  <div className="row">
    <div className="col-sm-4 text"><h1>Welcome Page One line text Will be here</h1>
    <p>Sign in to continue access pages</p>
    <span>Already Have An Account</span>
    <button>Sign In</button>
    </div>
    <div className="col-sm-8 form">
    <h2>Register</h2>
    <p>Register to continue access pages</p>
   <div className="form-reg"> <label  htmlFor="name"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="name" id="name" required /></div>
   <div className="form-reg">  <label htmlFor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required /></div>
     <div className="form-reg"> <label htmlFor="phone"><b>Phone</b></label>
    <input type="text" placeholder="Enter Phone" name="phone" id="phone" required /></div>
    <div className="form-reg"> <label htmlFor="prof"><b>Profession</b></label>
    <input type="text" placeholder="Enter Profession" name="prof" id="prof" required /></div>
   <div className="form-reg">   <label htmlFor="pass"><b>Password</b></label>
    <input type="password" placeholder="Enter password" name="pass" id="pass" required /></div>
   <div className="form-reg">  <label htmlFor="cpass"><b>Confirm Password</b></label>
    <input type="password" placeholder="Confirm password" name="cpass" id="cpass" required /></div>
   <div className="form-reg checkbox">  <input type="checkbox" />I agree to Terms & Condition receiving marketing and promotional materials</div>
   <div className="form-reg button"> <button type="submit" className="registerbtn">Register</button></div>
    </div>
    </div></div>
</section>

  );
}

export default Register;
