// import Header from "./components/Header/header"
import Register from "./components/Register/Register";
import SignIn from "./components/Sign/SignIn";
import Landing from "./components/Landing/Landing";

import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (

    <>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </BrowserRouter>
  </>
   
  );
}

export default App;
