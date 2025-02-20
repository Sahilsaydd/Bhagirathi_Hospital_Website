import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Form from "../Appoinment_form/Form";
export default function Navbar(){
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true
    });
    


   
    
   
    },[])
   

    return(<>
   
    <div className="container-fluid pt-2 pb-2 d-none d-lg-block shadow"  data-aos="fade-down" style={{borderBottom:"2px solid #e94545"}} >
<div className="row">
<div className="col-3 text-center ">
          <span ><span className="text-danger"><i className="fa fa-location-dot"></i></span>&nbsp;&nbsp;301/4 BurudGoan-Road, Ahemadnagar.</span>
          </div>
          <div className="col-3 text-center ">
          <span ><span className="text-danger"><i className="fa fa-envelope"></i></span>&nbsp;&nbsp; sayyadsahil124@gmail.com</span>
          </div>
          <div className="col-3 text-center ">
          <span ><span className="text-danger"><i className="fa-regular fa-clock"></i></span>&nbsp;&nbsp;9:00 AM to 11:00 PM</span>
          </div>
          <div className="col-3 text-center ">
          <span >Social Media :&nbsp; <span className="text-danger me-3 "><i className="fa fa-facebook"></i></span>
          <span className="text-danger me-3 "><i className="fa fa-instagram"></i></span>
          <span className="text-danger me-3 "><i className="fa fa-whatsapp"></i></span></span>
          </div>
</div>

    </div>
    <div className="container-fluid sticky-top " id="menu"  >
        <div className="row">
        
            <div className="col-lg-12 ">
            <nav className="navbar navbar-expand-lg p-2 " >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <div className="w-100 text-center">
        <h2 className="text-danger">Bhagirathi Hospital</h2>
      
      </div>
    </a>
   
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 menu-bar">
        <li className="nav-item">
          <NavLink className="nav-link ms-0 ms-lg-3 " aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link ms-0 ms-lg-3 " aria-current="page" to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link ms-0 ms-lg-3 " aria-current="page" to="/services">
           Services
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link ms-0 ms-lg-3 " aria-current="page" to="/gallary">
        Gallary
          </NavLink>
        </li>
       
      
        <li className="nav-item">
        <NavLink className="nav-link ms-0 ms-lg-3 " aria-current="page" to="/blogs">
            Blog
            
          </NavLink>
        </li>
      
        <li className="nav-item">
        <NavLink className="nav-link ms-0 ms-lg-3 " aria-current="page" to="/contact">
            Contact Us
            
          </NavLink>
        </li>
      </ul>
 
      <NavLink className="btn btn-danger rounded-0 " id="quote-btn" href="#enquiry-container" to='/form' style={{width:"180px"}}>Enquire Now</NavLink>

  
      
    </div>
  </div>
</nav>

            </div>
        </div>
    </div>
    
    </>)
}