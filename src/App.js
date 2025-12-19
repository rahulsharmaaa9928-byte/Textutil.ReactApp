import "./App.css";
import Navbar from "./Navbar";
import Textform from "./Textform";
import About from "./About";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#320958";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <Router>
      <Navbar textutils="TextUTILS" mode={mode} togglemode={toggleMode} />

      <div className="container my-3">
        <Routes>
          <Route exact path="/"
            element={<Textform heading="Enter the text to analyze" mode={mode} />}
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
