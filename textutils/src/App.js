import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { useState } from "react";
function App() {
  const [mode,setMode]= useState('light'); // Whether dark mode is enabled or not
  const toggleMode=()=>{
    mode === 'light'?setMode(mode==='dark'): setMode(mode==='light');
  };
  return (
    <>
    <div className="Navbar">
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
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