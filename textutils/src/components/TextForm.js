import React,{useState} from 'react'

export default function TextForm(props) {
  const [text,setText]=useState("Enter your text");
  const handleUpClick=(e)=>{
  e.preventDefault();
  setText(text.toUpperCase());
  };
  const handleLowClick=()=>{
    setText(text.toLowerCase());
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
  <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to upper case</button>
  <button className="btn btn-primary mx-4" onClick={handleLowClick}>Convert to upper case</button>

    </div>

    <div className="container my-4">
      <h1>Your text summary</h1>
      <p> {text.length} Characters and {text.split(' ').length} Words
      </p>
      <p>
        {text.length==0?0:0.008 * text.split(' ').length}Minutes read
      </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
