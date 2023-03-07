import React, { Component } from "react";
import axios from "axios";
import "./Profile.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default class FilesUploadComponent extends Component {
  constructor(props) {
    super(props);
    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      profileImg: "",
    };
  }
  onFileChange(e) {
    this.setState({ profileImg: e.target.files[0] });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = localStorage.getItem("user");
    const formData = new FormData();
    const refresh = () => window.location.reload(true)
    formData.append("profileImg", this.state.profileImg);
    formData.append("uid", user);
    axios
      .post("https://surveyformprojectbackend.onrender.com/api/user-profile", formData, {})
      .then((res) => {
        console.log(res);
        window.location.reload(true)
      });
  }

 
  render() {
    return (
      <section className="register-form sec">
        <Header />
        <Sidebar />

        <div className="container">
          <div className="row">
            <form id="form" onSubmit={this.onSubmit}>
              <div className="surveys">
                <h2 className="survey">Profile Picture</h2>
                <div className="surveysform qstn">
                  <input type="file" onChange={this.onFileChange}  />
                  <button className="btn btn-primary" type="submit">
                    Upload
                  </button>

                  <Link to="/mainpage">
                    <button className="btn btn-primary" type="submit">
                      Back
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
