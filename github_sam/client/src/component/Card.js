import React from "react"
import Subnav from "./Subnav"


export default function Card(props) {
  return (
    <>
    <div className="parent">
    <div class="card">
    <Subnav/>
      <div className="intro"><h5>{props.title}</h5></div>
      <div className="card2">
      <div class="card-img">
      <img  src={props.imgsrc} />
      </div>
      <div class="card-text">
        <p>{props.body}</p>
        <p>{props.leadname}</p>
      </div>
      </div> 
      <span class="refresh"><a href="sass.html" class="material-icons icns">cached</a>Data updated.</span> 
    </div>
    
  </div>  
    </>    
  )
}


