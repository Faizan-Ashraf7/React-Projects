import React,{useState} from 'react'

export default function TextForm(props) {
  const [text,setText]=useState("Enter your text");
  const handleUpClick=(e)=>{
  e.preventDefault();
  setText(text.toUpperCase());
  };
  const handleOnChange=(event)=>{
  setText(event.target.value);
  };
  // text=`new text`; //wrong way
  // setText(`new text`); // correct way
  return (
    <>
      <div>
      <h1>{props.heading} </h1>
      
    <textarea  className="form-control" id="myBox" value={text} onChange={handleOnChange} rows ="8"/>
    </div>
  <div>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>

    </div>
    </>
  )
}
