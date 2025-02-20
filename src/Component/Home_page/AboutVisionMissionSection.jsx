import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function AboutVisionMissionSection() {

  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true
    });
    


   
    
   
    },[])
  return (
    <>

    <div className="container py-3" >
        <div className="row">
            <div className="col-md-12" data-aos="fade-down">
               <div className="text-center ">
               <h2 className="Heading_color">About</h2>
               </div>
            </div>
        </div>
    </div>
      <div className="container p-3">
        <div className="row">
          <div className="col-md-6 p-2" data-aos="fade-up-left">
            <div className="">
              <img
                src="/Images/About1.jpg"
                alt=""
                className="w-100 h-70 rounded-2"
              />

              <div
                className=" p-2 text-white "
                style={{ backgroundColor: "#0392ce" }}
            data-aos="fade-down"    >
                <h6 data-aos="zoom-in">
                  As a tertiary referral ICU to provide state of the art care
                  with the help of very good professionals and infrastructure.
                </h6>
              </div>
            </div>
       
          </div>

          <div className="col-md-6 p-2" data-aos="fade-down-right">
            <div className="p-2">
              <h3  data-aos="zoom-in">Welcome To The Hospital</h3>

              <p  data-aos="zoom-in">
                <small>
                  It is a long established fact that a reader will be distracted
                  by the readable content more or less normal distribution of
                  letters opposed.
                </small>
              </p>
              <div className="d-flex">
                <i className="fa-regular fa-heart mt-2 me-2 text-primary"></i>
                <h5  data-aos="zoom-out" >Our Mission</h5>
              </div>
                <p className=""  data-aos="zoom-in">
                 <small> Reader will be distracted by the readable content of a page
                  when looking at its layout the point of using more or less
                  normal distribution.</small>
                </p>
              <div className="d-flex">
              <i class="fa-regular fa-eye mt-2 me-2 text-primary"></i>
                <h5  data-aos="zoom-out">Our Vision</h5>
              </div>
                <p className=""  data-aos="zoom-in">
                 <small>Explain to you how all this mistaken idea of denouncing pleasure.</small>
                </p>

             <div className="mt-2 ms-3 p-2">
             <i class="fa fa-thumbs-up text-primary me-2"  data-aos="fade-left"></i>
             <small  data-aos="zoom-in">Idea of denouncing pleasure and praising.</small>
             </div>

             <div className="mt-2 ms-3 p-2">
             <i class="fa fa-thumbs-up text-primary me-2"></i>
             <small  data-aos="zoom-in">Pleasure and praising pain was complete system.</small>
             </div>

             <div className="mt-1 ms-2">
                <button className="btn  p-3 text-dark border shadow rounded-pill button_design"  data-aos="zoom-in">Our Department</button>
             </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
