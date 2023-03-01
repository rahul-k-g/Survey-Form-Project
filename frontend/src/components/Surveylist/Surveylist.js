import "./Surveylist.css";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Surveylist() {
  return (
    <section class="register-form sec">
      <Header />
      <Sidebar />
      <div class="container">
        <div class="row">
          <form id="form">
            <div class="surveys list">
              {" "}
              <h2 class="survey">Survey List</h2>
              <div class="search">
                <i class="fa fa-search"></i>
                <input type="search" id="site-search" name="q" />
              </div>
              <div class="form-reg button survey list">
                <i class="fa fa-bars"></i>
                <i class="fa fa-filter"></i>{" "}
                <button type="submit" class="registerbtns">
                  Create
                </button>
              </div>
            </div>
            <table>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Type</th>
                <th>Startdate</th>
                <th>Enddate</th>
                <th colSpan={2} className="actions">
                  Actions
                </th>
              </tr>
              <tr>
                <td>Surveyname</td>
                <td>Description</td>
                <td>Type</td>
                <td>Startdate</td>
                <td>Enddate</td>
                <td className="actions">
                  <img src="./images/edit.png" width="10px" />
                </td>
                <td className="actions">
                  <img src="./images/del.png" width="10px" />
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Surveylist;
