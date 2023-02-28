import './Survey.css';
import React, {useState} from 'react';
import {useDropzone} from 'react-dropzone';
import axios from 'axios';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
function CreateSurvey() {
  const [image,setImage] =useState([]);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [formValue, setformValue] = React.useState({
    name: '',
    startdate: '',
    enddate:'',
    desc:'',
    ocrit:'',
    surveytype:'',

  });
  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]) 
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const loginFormData = new FormData();
    loginFormData.append("name", formValue.name)
    loginFormData.append("startdate", formValue.startdate)
    loginFormData.append("enddate", formValue.enddate)
    loginFormData.append("desc", formValue.desc)
    loginFormData.append("ocrit", formValue.ocrit)
    loginFormData.append("fileuploaded", selectedFile)
    loginFormData.append("surveytype", formValue.surveytype)
  
    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/api/survey",
        data: loginFormData.toString(),
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  }
  const {getRootProps, getInputProps,isDragActive }=useDropzone({
    accept: "image/*",
    onDrop:(acceptedFiles) => {
      setImage(
        acceptedFiles.map((upFile)=>Object.assign(upFile,{
        preview:URL.createObjectURL(upFile)
        }))
      )
    }

  })
  return (

<section className="register-form sec">
 <Header/>
<Sidebar/>
<div className="container">
  <div className="row">

   
    <form id="form" >
  <div className="surveys"> <h2 className="survey">Create Survey</h2>
    <div className="form-reg button survey"><button type="button" className="cancel">Cancel</button> <button type="submit" className="next" onClick={handleSubmit}>Next</button></div></div> <div className="surveysform">
   <div className="form-reg"> <label  htmlFor="name"><b>Name</b></label>
    <input type="text" className="txtinput" placeholder="Enter Name" name="name" id="name"   value={formValue.name} required onChange={handleChange} /></div>
   <div className="form-reg input-group date"> <div className="form-reg">  <label htmlFor="startdate"><b>Start date</b></label>
    <input type="date" className='datepicker txtinput' placeholder="DD/MM/YYYY" name="startdate" id="startdate" value={formValue.startdate} onChange={handleChange} required /></div>
    <div className="form-reg">  <label htmlFor="enddate"><b>End date</b></label>
    <input type="date" className="txtinput" placeholder="DD/MM/YYYY" name="enddate" id="enddate" value={formValue.enddate} required onChange={handleChange}  /></div></div>
    <div className="form-reg"> <label htmlFor="desc"><b>Description</b></label>
    <input type="text" className="txtinput" placeholder="Description" name="desc" id="desc" required value={formValue.desc} onChange={handleChange}/></div>
   <div className="form-reg">   <label htmlFor="ocrit"><b>Other Criteria</b></label>
    <input type="text" className="txtinput" placeholder="Other criteria" name="ocrit" id="ocrit" required value={formValue.ocrit} onChange={handleChange}/></div>
   <div className="form-reg">  <label htmlFor="surveytype"><b>Type of Survey</b></label>
    <input type="text" className="txtinput" placeholder="Survey Type" name="surveytype" id="surveytype" value={formValue.surveytype} required onChange={handleChange} /></div>
    <div className="form-reg drag">  <label htmlFor="surveytype"><b>Upload Image</b></label>
    <div {...getRootProps()}><input {...getInputProps()} onChange={handleFileSelect}/>
    {isDragActive ? <p>Drop the image here...</p>:<p>Drag and drop or file upload</p> }</div></div></div>
    {image.map((upFile)=>{
      return(<div>
        <img src={upFile.preview} className="imgPreview" alt="preview" />
      </div>)
    })}
   
   </form>
    </div>
    </div>
</section>

  );
}

export default CreateSurvey;
