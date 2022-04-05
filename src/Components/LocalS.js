import React, { useState , useEffect } from 'react';
import axios from 'axios' ;
import ls from 'localstorage-slim';
import {useLocation,useNavigate} from 'react-router-dom';
ls.config.encrypt = true;
ls.config.secret = 555;


function LocalS() {
    let location =useLocation();
    const[Empdata ,setEmp] =useState([]);
    const [key,setKey] = useState(location.state.pass)
    useEffect(()=>{
        axios.get("http://localhost:3005/data")
        .then(response=>(ls.set("data" ,response.data)))
        
        .catch(error=>console.log(error))

    },
    
    []);
    useEffect(()=>{
        console.log(key)
       console.log(ls.get("data" ,{ secret: key }))
       setEmp(ls.get("data" ,{ secret: key }))
      

   },
    
    []);
    return (
        <div>
            <ul>
               {Empdata.map(t=>{
                   return( 
                     //  <div>
                          //<h3>EmployeName= {t.name} EmployeeLocation ={t.location}</h3>
                          // </div>
                          <div>
                              
                              </div>
                   )
               })}
            </ul>
            
        </div>
    )
}
export default LocalS
