import "./MainPage.css";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Surveylist from "../Surveylist/Surveylist";
import { useLocation } from "react-router-dom";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
function MainPage() {
  const location = useLocation();
  const id = location.pathname.split("/")[1];
  const [survey, setSurvey] = useState(0);
  const [data, setdata] = useState([]);
  const [mail, setmail] = useState([]);
  const [haserror, sethaserror] = useState(false);
  const [selections, setSelections] = useState([]);

  // useEffect(() => {
  //   const getSurvey = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:5000/api/getallsurvey"+id);
  //       setSurvey(res.data);
  //     } catch (err) {}
  //   };
  //   getSurvey();
  // },[id]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/getallsurvey")
//       .then((response) => response.json())
//       .then((res) => setSurvey(res))
//       .catch((err) => sethaserror(true));
//   }, [id]);
const selectionChange = (e) => {
    setSelections([...selections, { id: e.target.name }])
}

useEffect(() => {
    fetch("http://localhost:5000/api/getallsurvey", {
        headers: {
            "Authorization": localStorage.getItem("jwt")
        }
    }).then((res) => {
        return res.json()
    }).then((final) => {
        setdata(final.info)
    }).catch((err) => {
        console.log(err)
    })
}, [survey])

let arr2 = []
    if (data.length !== 0 && mail.length !== 0) {
        for (let i = 0; i < data.length; i++) {
            let letter = data[i].email
            let flag = "true"
            for (let j = 0; j < mail.length; j++) {
                if (mail[j] !== letter[j]) {
                    flag = "false"
                    break
                }
            }
            if (flag === "true") {
                arr2.push(data[i])
            }
        }

    } else {
        arr2 = data
    }
    const handle = (val) => {
        let arr = []
        for (let i = 0; i < data.length; i++) {
            if (data[i].name === val.name) {

            } else {
                arr.push(data[i])
            }
        }
        setdata(arr)
    }
    console.log(arr2);
    
  return (
    <section className="register-form sec">
      <Header />
      <Sidebar />
      <div className="container">
        <div className="row">
          <form id="form">
            <div className="mainsurveys list">
              {" "}
              <h2 className="survey">Survey List</h2>
              <div className="search">
                <SearchIcon/>
                <input type="search" id="site-search" name="q" />
              </div>
              <div className="form-reg button survey list">
                <MenuIcon/>
             <FilterAltIcon />
                {" "}
                <Link to="/createsurvey">
                  <button type="submit" className="createbtn">
                    Create
                  </button>
                </Link>
              </div>
            </div>

            <table>
                <thead>

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
                </thead>

                <tbody>
                {(arr2.length !== 0) && <>{arr2.map((value) => {
                        return (
                              
                            <tr key={value._id} title={value.email}  id="titlee" > 
                                
                                {/* <td ><input type="checkbox" name={value._id} onChange={selectionChange} /></td> */}
                                <td>{value.name}</td>
                                <td>{value.description}</td>
                                <td>{value.surveyType}</td>
                                <td>{value.startdate}</td>
                                <td>{value.enddate}</td>
                                
                                {/* <td >{value.otherCriteria}</td> */}
                                
                                {/* <td>{value.fileUploaded}</td> */}
                                <td><button className="edit">edit</button></td>
                                <td><button className="delete">delete</button></td>
                                {/* <td> <button id="dlt" onClick={(e) => { dltContact(e); setdeletemodal(true); setpostdelete(true) }} name={value._id}>delete</button></td> */}

                                </tr>
                        )

                    })}</>}
                </tbody>
            </table>
            <div>
              
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
