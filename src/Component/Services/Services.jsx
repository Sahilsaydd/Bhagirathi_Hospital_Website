import React, { useEffect } from "react";
import Header from "../Heading_component/Heading";
import OurServices from "../Home_page/OurService";
import 'aos/dist/aos.css'
import Aos from "aos";
export default function Services() {


    
        useEffect(()=>{
        Aos.init({
            duration:1000
        });
        
        },[])
  return (
    <>
      <Header heading="Services" />
      <OurServices />

      <div className="container mt-4 py-5">
        <div className="row">
          <div className="col-md-4" data-aos="fade-up-right">
            <div className="Bg rounded-3 ">
              <div className="box1 p-3 text-center text-white" data-aos="fade-down">
                <p data-aos="zoom-in">
                  <small>
                    As a tertiary referral ICU to provide state of the art care
                    with the help of very good professionals and infrastructure.
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="">
              <h3 className="ms-2" data-aos="fade-down">Our Best Services</h3>
              <hr />

              <div className="row">
                <div className="col-md-6" data-aos="zoom-in">
                  <div className="p-2">
                    <h4 className="text-primary"data-aos="zoom-in" >
                      <b>Laboratory Analysis</b>
                    </h4>

                    <p className="" data-aos="zoom-in">
                      <small>
                        Explain to you how all this mistaken idea of denouncing
                        pleasure and praising pain was born and I will give you
                        a complete account of the system, and the master-builder
                        of human happiness. Expound the actual teachings of the
                        great explorer of the truth.
                      </small>
                    </p>
                    <button className="btn btn-outline-primary rounded-pill p-2" data-aos="fade-up">Read More</button>
                  </div>
                </div>
                <div className="col-md-6" data-aos="fade-left">
                    <div className="bg_lab rounded-3" data-aos="zoom-in" ></div>
                </div>
              </div>
                    <hr />
                <div className="row" data-aos="fade-up">
                    <div className="col-md-3">
                            <div className="">
                                <img src="/Images/service-small-1.jpg" className="rounded-3" alt="" height={'120px'} width={"100%"}  />
                                <h5 className="mt-2 text-center"><b>Opthalmology</b></h5>
                            </div>
                    </div>
                    <div className="col-md-3">
                            <div className="">
                                <img src="/Images/service-small-2.jpg" className="rounded-3" alt="" height={'120px'} width={"100%"}   />
                                <h5 className="mt-2 text-center"><b>Laboratory</b></h5>
                            </div>
                    </div>
                    <div className="col-md-3">
                            <div className="">
                                <img src="/Images/service-small-3.jpg" className="rounded-3" alt="" height={'120px'} width={"100%"}   />
                                <h5 className="mt-2 text-center"><b>Cardiac Clinic</b></h5>
                            </div>
                    </div>
                    <div className="col-md-3">
                            <div className="">
                                <img src="/Images/service-small-4.jpg" className="rounded-3" alt="" height={'120px'} width={"100%"}   />
                                <h5 className="mt-2 text-center"><b>OutPatient</b></h5>
                            </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
