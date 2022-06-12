import React from 'react';

import {Link as RouterLink , useLocation,useNavigate} from 'react-router-dom';

import img from './Image-2.jpg'


export default function App(){

const navigate = useNavigate();

 const handleSignUp =() =>{
  navigate('/register', { replace: true });
 }

 const handleSignIn =() =>{
  navigate('/login', { replace: true });
}


    return(
        <div className="bg-warning ">


        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-warning" href="http://www.toybank.org/play">ToyBank</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"/>
               
              
              
              
              
            
            <form className="d-flex" role="search">
              
              <button className=" btn  btn-outline-info text-light mx-2   btn-secondary" onClick = {handleSignUp}>SIGN UP</button>
              <button className=" btn btn-outline-info text-light  btn-secondary" onClick = {handleSignIn}>LOG IN</button>
            </form>
          </div>
        </div>
      </nav>
      
      </div>
    )
}