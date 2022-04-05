import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from './Components/Gallery';
import LocalS from './Components/LocalS';
import Secret from './Components/Secret';

import { ErrorBoundary } from './Components/ErrorBoundary';
import { BrowserRouter, Routes, Route } from "react-router-dom";

 import firebase from './firebase';

function App() {
  React.useEffect(()=>{
    const msg= firebase.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken();
    }).then((data)=>{
      console.warn("token",data)
    })
  })
  return (
    
    <ErrorBoundary>
    <BrowserRouter>
    <div className="App">
      
      
     
    <Routes>
     
       <Route  path ="/Gal" element ={<Gallery />} /> 
      <Route  path ="/Pass"  element ={<Secret />}  /> 
       <Route  path ="/Local" element ={<LocalS />} /> 
       
       
      

     </Routes>
    </div>
    </BrowserRouter>
    </ErrorBoundary>

 
  );
}

export default App;
