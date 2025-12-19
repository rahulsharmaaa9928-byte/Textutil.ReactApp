import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import { useState } from "react";

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
    <>
      <Navbar
        textutils="TextUTILS"
        mode={mode}
        togglemode={toggleMode}
      />

      <div className="container my-3">
        {/* ✅ TextForm is now UN-COMMENTED and visible */}
        <TextForm
          heading="Enter the text to analyze"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
