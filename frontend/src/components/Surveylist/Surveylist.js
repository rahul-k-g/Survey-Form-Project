import "./Surveylist.css";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Surveylist() {


  return (
    <section class="register-form sec">
      
      <div class="container">
        <div class="row">
          <form id="form">

            <table>
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
