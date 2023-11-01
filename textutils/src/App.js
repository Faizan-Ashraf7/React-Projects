import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { useState } from "react";
function App() {
  const [mode,setMode]= useState('light'); // Whether dark mode is enabled or not
  const toggleMode=()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
    } else {
      setMode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
    }
    // mode === 'light'
    // ?setMode('dark') : setMode('light');
    
    // mode === 'light'?document.body.style.backgroundColor="black":document.body.style.backgroundColor="white";
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