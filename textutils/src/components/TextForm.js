import React from 'react'

export default function TextForm(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
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
    <textarea  className="form-control" id="myBox" rows ="8"/>
  </div>
  <button className="btn btn-primary">Convert to upper case</button>
</form>
    </div>
  )
}
