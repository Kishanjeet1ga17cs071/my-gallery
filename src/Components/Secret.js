import React, { useState , useEffect } from 'react';
import {  useNavigate, Link } from "react-router-dom";
import './Secret.css'

const Secret = () => {
    let history = useNavigate();
    const[key,setKey]=useState("")
    const submit=()=>{
     
        history("/Local",{state:{pass:key}})
    }
    return (
     //  <div>
           // <form className="form" onSubmit={submit}>
               // <label>Key</label>
               // <input type="text" onChange={(e) => setKey(e.target.value)} />
                //<button type="submit">Submit</button>
            //</form>
      //  </div>
      // <div>
           <div className ="body1">
            <div className="form">
      <div className="title">Welcome</div>
      <div className="subtitle">Authentication</div>
      <div className="input-container ic1">
        <input id="key" className="input" type="text"  onChange={(e) => setKey(e.target.value)} />
        <div className="cut"></div>
        <label for="key" className="placeholder">Enter the pin</label>
      </div>
    
     
      <button type="submit" className="submit"  onClick={submit}>submit</button>
    </div>
       </div>

      


    );
};

export default Secret;


