// import Header from "./components/Header/header"
import Register from "./components/Register/Register";
import CreateSurvey from "./components/Survey/CreateSurvey";
import Surveylist from "./components/Surveylist/Surveylist";
import SignIn from "./components/Sign/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (

    <>
   
    {
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<SignIn />}></Route>
        {/* <Route path="/landing" element={<LandingPage />}></Route> */}
        <Route path="/createsurvey" element={<CreateSurvey />}></Route>
        <Route path="/surveylist" element={<Surveylist />}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </BrowserRouter>
  }
  </>
   

  );
}

export default App;
