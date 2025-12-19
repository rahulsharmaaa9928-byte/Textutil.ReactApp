import React, { useState } from "react";

export default function Textform(props) {

  const handleUpChange = () => {
    console.log("You clicked the button" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  
  const handleLoChange = () => {
    console.log("You clicked the button" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  
   const handleClearchange = () => {
  
    let newText = '';
    setText(newText);
   };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
    <div className=" container my-3" style={{color:props.mode === 'dark'? 'white': '#320958'}} >
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <textarea
          className="form-control" style={{backgroundColor:props.mode === 'dark'? 'grey': 'white',color:props.mode === 'dark'? 'white': '#320958'}}
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleUpChange}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-2" onClick={handleLoChange}>Convert to Lower Case </button>
      <button className="btn btn-primary mx-2" onClick={handleClearchange}>clear text </button>
      
            
     </div>
    
    <div className="container my-3"  style={{color:props.mode === 'dark'? 'white': '#320958'}} >
      <h1>
        Your Summary
      </h1>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008*text.split("").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
