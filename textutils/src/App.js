import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import About from "./components/About";
function App() {
  return (
    <>
    <div className="Navbar">
  <Navbar title="TextUtils" aboutText="About Us" />
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