import React, { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
export default function OurServices(){

  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true
    });
    


   
    
   
    },[])
    return(
        <>

        <div className="container-fluid  py-4">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="Heading_color" data-aos="fade-down"><b>Our Services</b></h3>
                </div>
            </div>
        </div>
        <div className="container-fluid bg-body-tertiary  py-4 me-2">
            <div className="row p-3">
                <div className="col-md-4" data-aos="fade-right">
                   <div className="d-flex justify-content-center align-items-center p-3 ">
                   <div className="rounded-circle  p-3 me-2 icon">
                   <h3><i class="fa fa-ambulance text-primary" aria-hidden="true"></i></h3>
                        </div>
                        <div >
                            <h5><b>24 Hrs Ambulance</b></h5>
        <small>How all this mistaken idea denoucing pleasure and praisings pain was born complete account expound.</small>
                        </div>
                   </div>
                </div>
                <div className="col-md-4  "  data-aos="fade-down">
                   <div className="d-flex justify-content-center align-items-center p-3 ">
                   <div className="rounded-circle  p-3 me-2 icon">
                   <h3><i class="fa fa-box-open" aria-hidden="true"></i>
                   </h3>
                        </div>
                        <div >
                            <h5><b>Food & Dietry</b></h5>
        <small>There anyone who loves or pursues or to obtain pain of itself, because it is but because occasionallys.</small>
                        </div>
                   </div>
                </div>
                <div className="col-md-4  "  data-aos="fade-left">
                   <div className="d-flex justify-content-center align-items-center p-3 ">
                   <div className="rounded-circle  p-3 me-2 icon">
                   <h3><i class="fa fa-user-nurse" aria-hidden="true"></i>
                   </h3>
                        </div>
                        <div >
                            <h5><b>Special Nurses</b></h5>
        <small>Pursues or desires to obtain pain itself, because is pain, because occasionally circumstances occur procure.</small>
                        </div>
                   </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4" data-aos="fade-right">
                   <div className="d-flex justify-content-center align-items-center p-3 ">
                   <div className="rounded-circle  p-3 me-2 icon">
                   <h3><i class="fa fa-home" aria-hidden="true"></i>
                   </h3>
                        </div>
                        <div >
                            <h5><b>Places of Worship</b></h5>
        <small>How all this mistaken idea denoucing pleasure and praisings pain was born complete account expound.</small>
                        </div>
                   </div>
                </div>
                <div className="col-md-4  "  data-aos="fade-down">
                   <div className="d-flex justify-content-center align-items-center p-3 ">
                   <div className="rounded-circle  p-3 me-2 icon">
                   <h3><i class="fa fa-phone" aria-hidden="true"></i>
                   </h3>
                        </div>
                        <div >
                            <h5><b>Customer Support</b></h5>
        <small>Undertakes laborious physical exercise, except to obtain some advantage from it but who has any right.</small>
                        </div>
                   </div>
                </div>
                <div className="col-md-4  "  data-aos="fade-left">
                   <div className="d-flex justify-content-center align-items-center p-3 ">
                   <div className="rounded-circle  p-3 me-2 icon">
                   <h3><i class="fa fa-first-aid" aria-hidden="true"></i>
                   </h3>
                        </div>
                        <div >
                            <h5><b>Very Fast Aid</b></h5>
        <small>Pursues or desires to obtain pain itself, because is pain, because occasionally circumstances occur procure.</small>
                        </div>
                   </div>
                </div>
            </div>
        </div>
        
        </>
    )
}