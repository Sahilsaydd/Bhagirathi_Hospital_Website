import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Slider from "../Slider/Slider.jsx";
import About from "./AboutVisionMissionSection.jsx";
import Footer from "../Footer/Footer.jsx";
import AboutVisionMissionSection from "./AboutVisionMissionSection.jsx";
import OurServices from "./OurService.jsx";
import Our_doctors from "./Our_doctors.jsx";
import HappyCustomer from "./Happy_customer.jsx";

export default function Home(){
    return(
        <>
        
      
      <Slider></Slider>
     <AboutVisionMissionSection></AboutVisionMissionSection>

        <OurServices></OurServices>
        {/* <Our_doctors></Our_doctors> */}
        <HappyCustomer></HappyCustomer>
        
        </>


    )
}