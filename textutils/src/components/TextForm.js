import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
  // console.log(text.toUpperCase())
  console.log(`Upper case was clicked`);
  setText(`You've clicked on handle up click`)
  };
  const handleOnChange=()=>{
  // console.log(text.toUpperCase())
  console.log(`On change`);
  };
  const [text,setText]=useState("");
  // text=`new text`; //wrong way
  // setText(`new text`); // correct way
  return (
    <div>
      <h1>{props.heading} </h1>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <label className="form-label" htmlFor="myBox"></label>
    <textarea  className="form-control" id="myBox" value={text} onChange={handleOnChange} rows ="8"/>
  </div>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
</form>
    </div>
  )
}
