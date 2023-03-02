import "./Questions.css";
import React, { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
 
function CreateQuestions() {
    const navigate = useNavigate();
    const [question1, setQuestion1] = useState("");
    const [question2, setQuestion2] = useState("");
    const [question3, setQuestion3] = useState("");
    const [qstn1option,setQstn1option] = useState("");
    const [qstn2option,setQstn2option] = useState("");
    const [qstn3option,setQstn3option] = useState("");
    const [response, setResponse] = useState([]);
    const loggedInUser = localStorage.getItem("user");
    console.log("logged user " +loggedInUser)
    const handleQuestion= async (event)=>{
        setQuestion1("")
        setQuestion2("")
        setQuestion3("")
        setQstn1option("")
        setQstn2option("")
        setQstn3option("")
        const resp = await fetch("http://localhost:5000/api/createqstns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        question1,
        qstn1option,
        question2,
        qstn2option,
        question3,
        qstn3option
      }),
    });
    console.log(data.data);
    const data = await resp.json();
    setResponse(data);
    if (data.data) {
      navigate("/createquestions");
    }
  
    }

  return (
    <section className="register-form sec">
      <Header />
      <Sidebar />
      <div className="container">
        <div className="row">
          <form id="form">
            <div className="surveys">
              {" "}
              <h2 className="survey">Create Questions</h2>
              <div className="form-reg button survey">
                <Link to="/previewquestions">

                <button type="button" className="cancel">
                  Preview
                </button>
                </Link>
                
                <button type="submit" className="next" onClick={handleQuestion}>
                  Save
                </button>
              </div>
            </div>{" "}
            <div className="surveysform qstn">
             <div className="qstn-reg">
                  {" "}
                  <label htmlFor="name">
                  <b>Question 1</b>
                  </label>
                 <input
                  type="text"
                  className="txtinput"
                  placeholder="Enter Name"
                  name="question1"
                  id="question1"
                  required onChange={(e) => setQuestion1(e.target.value)} />
                  <input type="radio"   name="qstn1option" value="Yes"  onChange={(e) => setQstn1option(e.target.value)}/><span className='radiotext'>Yes</span> <br/>
                  <input type="radio"  name="qstn1option" value="No" onChange={(e) => setQstn1option(e.target.value)} /><span className='radiotext'>No</span><br/>
                  <input type="radio"  name="qstn1option" value="Not sure" onChange={(e) => setQstn1option(e.target.value)} /><span className='radiotext'>Not sure</span><br/>
             </div>
             <div className="qstn-reg">
                  {" "}
                  <label htmlFor="name">
                  <b>Question 2</b>
                  </label>
                 <input
                  type="text"
                  className="txtinput"
                  placeholder="Enter Name"
                  name="question1"
                  id="question1"
                  required onChange={(e) => setQuestion2(e.target.value)} />
                  <input type="radio"  name="qstn2option" value="Yes" onChange={(e) => setQstn2option(e.target.value)}/><span className='radiotext'>Yes</span><br/>
                  <input type="radio" name="qstn2option" value="No" onChange={(e) => setQstn2option(e.target.value)}/><span className='radiotext'>No</span><br/>
                  <input type="radio" name="qstn3option" value="Not sure" onChange={(e) => setQstn2option(e.target.value)}/><span className='radiotext'>Not sure</span><br/>
             </div>
             <div className="qstn-reg">
                  {" "}
                  <label htmlFor="name">
                  <b>Question 3</b>
                  </label>
                 <input
                  type="text"
                  className="txtinput"
                  placeholder="Enter Name"
                  name="question1"
                  id="question1"
                  required onChange={(e) => setQuestion3(e.target.value)} />
                  <input type="radio"  name="qstn3option" value="Yes" onChange={(e) => setQstn3option(e.target.value)}/><span className='radiotext'>Yes</span><br/>
                  <input type="radio" name="qstn3option" value="No" onChange={(e) => setQstn3option(e.target.value)}/><span className='radiotext'>No</span><br/>
                  <input type="radio" name="qstn3option" value="Not sure" onChange={(e) => setQstn3option(e.target.value)}/><span className='radiotext'>Not sure</span><br/>
             </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateQuestions;