import React from 'react';
import {GoogleMap,withScriptjs,withGoogleMap } from "react-google-maps";

function Map1(){
    return (
        <GoogleMap
        defaultZoom ={10}
        defaultCenter={{lat: 45, lng:-45 }}
        />
    );
}


const WrappedMap =withScriptjs(withGoogleMap(Map1));

export default function Map(){
    return (
        <div style ={{width:'100vw',height:'100vh'}} >
            <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
            loadingElement ={<div style ={{ height : "100%"}}/>}
            containerElement ={<div style ={{height: "100%"}} />}
            mapElement ={<div style ={{height: "100%"}} />}
            />
        </div>
    );
}