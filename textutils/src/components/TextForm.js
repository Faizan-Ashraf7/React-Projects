import React,{useState} from 'react'

export default function TextForm(props) {
  const [text,setText]=useState("");
  const handleUpClick=(e)=>{
  e.preventDefault();
  setText(text.toUpperCase());
  };
  const handleLowClick=()=>{
    setText(text.toLowerCase());
  };
  const clearText=()=>{
    setText("")
  };
  const handleOnChange=(event)=>{
  setText(event.target.value);
  };
  // text=`new text`; //wrong way
  // setText(`new text`); // correct way
  return (
    <>
      <div className='container'>
      <h1>{props.heading} </h1>
      <div>
    <textarea  className="form-control" id="myBox" value={text} onChange={handleOnChange} rows ="8"/>
    </div>
  <button className="btn btn-dark mx-4 my-2 bg-dark" onClick={handleUpClick}>Convert to upper case</button>
  <button className="btn btn-dark mx-4 my-2 bg-dark" onClick={handleLowClick}>Convert to lower case</button>
  <button className="btn btn-dark mx-4 my-2 bg-dark" onClick={clearText}>Clear</button>

    </div>

    <div className="container my-4">
      <h2>Your text summary</h2>
      <p> {text.length} Characters and {text===""?0: text.split(' ').length} Words
      </p>
      <p>
        {text.length===0?0:0.008 * text.split(' ').length}Minutes read
      </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
