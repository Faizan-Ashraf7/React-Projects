import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { useState } from "react";
function App() {
  const [darkmode,setDarkMode]= useState(false); // Whether dark mode is enabled or not

  return (
    <>
    <div className="Navbar">
  <Navbar title="TextUtils" mode={darkmode}/>
  </div>
  <div className="container my-3">
  <TextForm heading="Enter the text below to analyze"/>
  </div>
  <div>
    <About/>
  </div>
    </>
  );
}

export default App;