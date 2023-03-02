import "./Survey.css";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CreateSurvey() {
  const navigate = useNavigate();
  const [image, setImage] = useState([]);
  const [selectedFile, setSelectedFile] = React.useState(null);

  const [name, setName] = useState("");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [desc, setDesc] = useState("");
  const [ocrit, setOcrit] = useState("");
  const [surveytype, setSurveytype] = useState("");
  const [response, setResponse] = useState([]);

  const HandleCreateSurvey = async (event) => {
    event.preventDefault();
    setName("");
    setStartdate("");
    setEnddate("");
    setDesc("");
    setOcrit("");
    setSurveytype("");
    setImage("");

    const resp = await fetch("http://localhost:5000/api/creatsurvey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        startdate,
        enddate,
        desc,
        ocrit,
        surveytype,
      }),
    });
    console.log(data.data);
    const data = await resp.json();
    setResponse(data);
    if (data.data) {
      navigate("/surveylist");
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setImage(
        acceptedFiles.map((upFile) =>
          Object.assign(upFile, {
            preview: URL.createObjectURL(upFile),
          })
        )
      );
    },
  });
  return (
    <section className="register-form sec">
      <Header />
      <Sidebar />
      <div className="container">
        <div className="row">
          <form id="form">
            <div className="surveys">
              {" "}
              <h2 className="survey">Create Survey</h2>
              <div className="form-reg button survey">
                <button
                  type="button"
                  className="savesurvey"
                  onClick={HandleCreateSurvey}
                >
                  Save
                </button>{" "}
                <Link to="/createquestions">
                  <button type="submit" className="next">
                    Next
                  </button>
                </Link>
              </div>
            </div>{" "}
            <div className="surveysform">
              <div className="form-reg">
                {" "}
                <label htmlFor="name">
                  <b>Name</b>
                </label>
                <input
                  type="text"
                  className="txtinput"
                  placeholder="Enter Name"
                  name="name"
                  id="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="form-reg input-group date">
                {" "}
                <div className="form-reg">
                  {" "}
                  <label htmlFor="startdate">
                    <b>Start date</b>
                  </label>
                  <input
                    type="date"
                    className="datepicker txtinput"
                    placeholder="DD/MM/YYYY"
                    name="startdate"
                    id="startdate"
                    required
                    onChange={(e) => setStartdate(e.target.value)}
                    value={startdate}
                  />
                </div>
                <div className="form-reg">
                  {" "}
                  <label htmlFor="enddate">
                    <b>End date</b>
                  </label>
                  <input
                    type="date"
                    className="txtinput"
                    placeholder="DD/MM/YYYY"
                    name="enddate"
                    id="enddate"
                    required
                    onChange={(e) => setEnddate(e.target.value)}
                    value={enddate}
                  />
                </div>
              </div>
              <div className="form-reg">
                {" "}
                <label htmlFor="desc">
                  <b>Description</b>
                </label>
                <input
                  type="text"
                  className="txtinput"
                  placeholder="Description"
                  name="desc"
                  id="desc"
                  required
                  onChange={(e) => setDesc(e.target.value)}
                  value={desc}
                />
              </div>
              <div className="form-reg">
                {" "}
                <label htmlFor="ocrit">
                  <b>Other Criteria</b>
                </label>
                <input
                  type="text"
                  className="txtinput"
                  placeholder="Other criteria"
                  name="ocrit"
                  id="ocrit"
                  required
                  onChange={(e) => setOcrit(e.target.value)}
                  value={ocrit}
                />
              </div>
              <div className="form-reg">
                {" "}
                <label htmlFor="surveytype">
                  <b>Type of Survey</b>
                </label>
                <input
                  type="text"
                  className="txtinput"
                  placeholder="Survey Type"
                  name="surveytype"
                  id="surveytype"
                  onChange={(e) => setSurveytype(e.target.value)}
                  value={surveytype}
                />
              </div>
              <div className="form-reg drag">
                {" "}
                <label htmlFor="surveytype">
                  <b>Upload Image</b>
                </label>
                <div {...getRootProps()}>
                  <input {...getInputProps()} onChange={handleFileSelect} />
                  {isDragActive ? (
                    <p>Drop the image here...</p>
                  ) : (
                    <p>Drag and drop or file upload</p>
                  )}
                </div>
              </div>
            </div>
            {image.map((upFile) => {
              return (
                <div>
                  <img
                    src={upFile.preview}
                    className="imgPreview"
                    alt="preview"
                  />
                </div>
              );
            })}
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateSurvey;
