import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
<Navbar title="TextUtils" aboutText="About Us" />
<TextForm />
    </>
  );
}

export default App;