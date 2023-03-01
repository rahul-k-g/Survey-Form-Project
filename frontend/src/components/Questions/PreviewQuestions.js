import "./Questions.css";
import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
 
function PreviewQuestions() {
  const navigate = useNavigate();
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [qstn1option,setQstn1option] = useState("");
  const [qstn2option,setQstn2option] = useState("");
  const [qstn3option,setQstn3option] = useState("");
  const[response,setResponse] = useState([])
    useEffect(() => {
        fetchQuestions()
      }, []);
     
      async function fetchQuestions() {


        const resp = await fetch("http://localhost:5000/api/getqstns", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          
          })
          .then(response => response.json())
           .then(({ data: items }) => {
            setResponse(items);
           });
          
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
                <button type="button" className="cancel">
                  Close Preview
                </button>{" "}
                <button type="submit" className="next" >
                  Save
                </button>
              </div>
            </div>{" "}
            <div className="surveysform qstn">
              {
                response.map((items, idx)=>{
                 return(<div key={idx} >
                 <div className="qstn-reg" > <label htmlFor="name"><b>{items.question1}</b></label><br/>
              
                { items.qstn1option=="Yes" && 
                <div>
                <input type="radio"   name="qstn1option" value="Yes"  checked onChange={(e) => setQstn1option(e.target.value)}/><span className='radiotext'>Yes</span> <br/>
                  <input type="radio"  name="qstn1option" value="No" onChange={(e) => setQstn1option(e.target.value)} /><span className='radiotext'>No</span><br/>
                  <input type="radio"  name="qstn1option" value="Not sure" onChange={(e) => setQstn1option(e.target.value)} /><span className='radiotext'>Not sure</span><br/>
               </div> }

               { items.qstn1option=="No" && 
               <div>
                <input type="radio"   name="qstn1option" value="Yes"   onChange={(e) => setQstn1option(e.target.value)}/><span className='radiotext'>Yes</span> <br/>
                  <input type="radio"  name="qstn1option" value="No" checked onChange={(e) => setQstn1option(e.target.value)} /><span className='radiotext'>No</span><br/>
                  <input type="radio"  name="qstn1option" value="Not sure" onChange={(e) => setQstn1option(e.target.value)} /><span className='radiotext'>Not sure</span><br/>
               </div> }

               { items.qstn1option== "Not sure" && 
               <div>
                <input type="radio"   name="qstn1option" value="Yes"   onChange={(e) => setQstn1option(e.target.value)}/><span className='radiotext'>Yes</span> <br/>
                  <input type="radio"  name="qstn1option" value="No" onChange={(e) => setQstn1option(e.target.value)} /><span className='radiotext'>No</span><br/>
                  <input type="radio"  name="qstn1option" value="Not sure" checked onChange={(e) => setQstn1option(e.target.value)} /><span className='radiotext'>Not sure</span><br/>
               </div> }
               
               </div> 
                <div className="qstn-reg" > <label htmlFor="name"><b>{items.question2}</b></label><br/>
                { items.qstn2option=="Yes" && 
                <div>
                <input type="radio"   name="qstn2option" value="Yes"  checked onChange={(e) => setQstn1option(e.target.value)}/><span className='radiotext'>Yes</span> <br/>
                  <input type="radio"  name="qstn2option" value="No" onChange={(e) => setQstn1option(e.target.value)} /><span className='radiotext'>No</span><br/>
                  <input type="radio"  name="qstn2option" value="Not sure" onChange={(e) => setQstn1option(e.target.value)} /><span className='radiotext'>Not sure</span><br/>
               </div> }

               { items.qstn2option=="No" && 
               <div>
                <input type="radio"   name="qstn2option" value="Yes"   onChange={(e) => setQstn1option(e.target.value)}/><span className='radiotext'>Yes</span> <br/>
                  <input type="radio"  name="qstn2option" value="No" checked onChange={(e) => setQstn1option(e.target.value)} /><span className='radiotext'>No</span><br/>
                  <input type="radio"  name="qstn2option" value="Not sure" onChange={(e) => setQstn1option(e.target.value)} /><span className='radiotext'>Not sure</span><br/>
               </div> }

               { items.qstn2option== "Not sure" && 
               <div>
                <input type="radio"   name="qstn2option" value="Yes"   onChange={(e) => setQstn1option(e.target.value)}/><span className='radiotext'>Yes</span> <br/>
                  <input type="radio"  name="qstn2option" value="No" onChange={(e) => setQstn1option(e.target.value)} /><span className='radiotext'>No</span><br/>
                  <input type="radio"  name="qstn2option" value="Not sure" checked onChange={(e) => setQstn1option(e.target.value)} /><span className='radiotext'>Not sure</span><br/>
               </div> }  </div> 
                <div className="qstn-reg" > 
                 <label htmlFor="name"><b>{items.question3}</b></label><br/>
                { items.qstn3option=="Yes" && 
                <div>
                <input type="radio"   name="qstn3option" value="Yes"  checked onChange={(e) => setQstn1option(e.target.value)}/><span className='radiotext'>Yes</span> <br/>
                  <input type="radio"  name="qstn3option" value="No" onChange={(e) => setQstn1option(e.target.value)} /><span className='radiotext'>No</span><br/>
                  <input type="radio"  name="qstn3option" value="Not sure" onChange={(e) => setQstn1option(e.target.value)} /><span className='radiotext'>Not sure</span><br/>
               </div> }

               { items.qstn3option=="No" && 
               <div>
                <input type="radio"   name="qstn3option" value="Yes"   onChange={(e) => setQstn1option(e.target.value)}/><span className='radiotext'>Yes</span> <br/>
                  <input type="radio"  name="qstn3option" value="No" checked onChange={(e) => setQstn1option(e.target.value)} /><span className='radiotext'>No</span><br/>
                  <input type="radio"  name="qstn3option" value="Not sure" onChange={(e) => setQstn1option(e.target.value)} /><span className='radiotext'>Not sure</span><br/>
               </div> }

               { items.qstn3option== "Not sure" && 
               <div>
                <input type="radio"   name="qstn3option" value="Yes"   onChange={(e) => setQstn1option(e.target.value)}/><span className='radiotext'>Yes</span> <br/>
                  <input type="radio"  name="qstn3option" value="No" onChange={(e) => setQstn1option(e.target.value)} /><span className='radiotext'>No</span><br/>
                  <input type="radio"  name="qstn3option" value="Not sure" checked onChange={(e) => setQstn1option(e.target.value)} /><span className='radiotext'>Not sure</span><br/>
               </div> }
                </div> 
                </div>)
                })
              }
           
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PreviewQuestions;