import React, { useEffect } from "react";
import Header from "../Heading_component/Heading";
import 'aos/dist/aos.css'
import Aos from "aos";
export default function Gallary(){

    
        useEffect(()=>{
        Aos.init({
            duration:1000
        });
        
        },[])
    return(
        <>

        <Header heading="Gallary"/>

        <div className="container-fluid mt-3 py-4 ">
            <div className="row">
                <div className="col-md-12 text-center" >
                    <h1 data-aos="zoom-in" className="Heading_color "><b>Our Gallary</b></h1>
                </div>
            </div>
        </div>
        <div className="container-fluid py-3 mt-2 bg-body-tertiary">
        <div className="row">
            <div className="col-md-12 text-center">
                <div data-aos="fade-down">
                    <img src="/Images/bg11.jpg" alt="" height={"200px"} width={"100%"} className="rounded-3 shadow"/>
                </div>
            </div>
        </div>
        
       </div>
       
       <div className="container mt-3 py-5">
        <div className="row mb-4">
            <div className="col-md-4" data-aos="fade-right">
                <img src="/Images/our-gallery1.jpg" alt="" height={'250px'} width={'100%'} className="rounded-3" />
            </div>
            <div className="col-md-4" data-aos="fade-down">
                <img src="/Images/our-gallery2.jpg" alt="" height={'250px'} width={'100%'} className="rounded-3" />
            </div>
            <div className="col-md-4" data-aos="fade-left">
                <img src="/Images/our-gallery3.jpg" alt="" height={'250px'} width={'100%'} className="rounded-3" />
            </div>
        </div>
        <div className="row mb-4">
            <div className="col-md-4" data-aos="zoom-in">
                <img src="/Images/our-gallery4.jpg" alt="" height={'250px'} width={'100%'} className="rounded-3" />
            </div>
            <div className="col-md-4"  data-aos="zoom-in">
                <img src="/Images/our-gallery5.jpg" alt="" height={'250px'} width={'100%'} className="rounded-3" />
            </div>
            <div className="col-md-4"  data-aos="zoom-in">
                <img src="/Images/our-gallery6.jpg" alt="" height={'250px'} width={'100%'} className="rounded-3" />
            </div>
        </div>
        <div className="row">
            <div className="col-md-4" data-aos="fade-right">
                <img src="/Images/our-gallery7.jpg" alt="" height={'250px'} width={'100%'} className="rounded-3" />
            </div>
            <div className="col-md-4" data-aos="fade-up">
                <img src="/Images/our-gallery8.jpg" alt="" height={'250px'} width={'100%'} className="rounded-3" />
            </div>
            <div className="col-md-4" data-aos="fade-left">
                <img src="/Images/our-gallery9.jpg" alt="" height={'250px'} width={'100%'} className="rounded-3" />
            </div>
        </div>
       </div>
        
        </>
    )
}