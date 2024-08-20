import React from 'react';
// import ReactDOM from 'react-dom/client';
import Map from './imgmap'

import App from './App';
import Changer1 from './changer';


export default function LandApp(){
  return(
    <div className="bg-secondary" style={{bg: "cover"}}>
    <App />
    <Changer1 />
    <Map />
  </div>
  )
}


 