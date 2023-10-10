import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
  <Navbar title="TextUtils" aboutText="About Us" />
  <div className="container">
  <TextForm heading="Enter the form data"/>
  </div>
    </>
  );
}

export default App;