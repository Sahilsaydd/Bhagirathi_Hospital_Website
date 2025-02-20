import React, { useEffect } from "react";
import Header from "../Heading_component/Heading";
import AboutVisionMissionSection from "../Home_page/AboutVisionMissionSection";
import 'aos/dist/aos.css'
import Aos from "aos";
import HappyCustomer from "../Home_page/Happy_customer";
export default function About(){

    useEffect(()=>{
    Aos.init({
        duration:500
    });
    
    },[])

    return(
        <>


                <Header heading="AboutUs"/>
             <AboutVisionMissionSection/>

             <div className="container-fluid py-5 bg-body-tertiary">
                <div className="row">
                    <div className="col-md-12"  data-aos="fade-up">
                        <div className="d-flex justify-content-evenly align-content-centers p-4 bg-primary text-white">

                        <h3><b>If you are a patient seeking quality healthcare at affordable prices!.</b></h3>
                        <button className="btn btn-dark">Make An Appoinment</button>
                        </div>
                    </div>
                </div>
             </div>



        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 text-center ">
                    <h3  data-aos="fade-down"><b>Details About Hospital</b></h3>
                </div>
            </div>
           
        </div>

        <div className="container py-5  bg-body-tertiary">
            <div className="row">
                <div className="col-md-6" data-aos="fade-left">
                    <div className="hospital rounded-3  p-5">

                    </div>
                </div>

                <div className="col-md-6" data-aos="fade-right">
                    <div className="p-3 text-center ">
                        <h5 className="Heading_color"><b>Bhagirathi Hospital 25+ Years EXP</b></h5>
                        <p><small>Lorem ipsum dolor sit amet   odio. Hic incidunt ad adipisci quibusdam aspernatur placeat animi natus consequatur, exercitationem, suscipit quisquam, totam debitis distinctio.</small></p>
                        <p><small>Lorem ipsum dolor sit amet consectetur  odio. Hic incidunt ad adipisci quibusdam aspernatur placeat animi natus consequatur, exercitationem, suscipit quisquam, totam debitis distinctio.</small></p>
                        <p><small>Lorem ipsum dolor sit amet consectetur  odio. Hic incidunt ad adipisci quibusdam aspernatur placeat animi natus consequatur, exercitationem, suscipit quisquam, totam debitis distinctio.</small></p>
                    </div>
                </div>
            </div>
        </div>
        

<div className="container-fluid py-3">
    <div className="row">
        <div className="col-md-12 text-center">
            <h2 className="Heading_color" data-aos="fade-down"><b>Our Doctor's Team</b></h2>
        </div>
    </div>
</div>
        <div className="container-fluid py-5  bg-body-tertiary">
            <div className="row" >
                <div className="col-md-3 mt-2   " data-aos="fade-left">
                <div className="card" style={{width:"18rem"}}>
  <img src="/Images/D1.jpg" className="card-img-top" height="150px" alt="..."/>
  <div className="card-body text-center">
    <h5 className="card-title">Marc Parsival</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Visit</a>
  </div>
</div>
                </div>
                <div className="col-md-3 mt-2  " data-aos="fade-left">
                <div className="card" style={{width:"18rem"}}>
  <img src="/Images/d2.jpg" className="card-img-top" height="150px" alt="..."/>
  <div className="card-body text-center">
    <h5 className="card-title">Alen Bailey</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Visit</a>
  </div>
</div>
                </div>
                <div className="col-md-3 mt-2  " data-aos="fade-right">
                <div className="card" style={{width:"18rem"}}>
  <img src="/Images/d3.jpg" className="card-img-top" height="150px" alt="..."/>
  <div className="card-body text-center">
    <h5 className="card-title">Basil Andrew</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Visit</a>
  </div>
</div>
                </div>
                 <div className="col-md-3 mt-2  " data-aos="fade-right">
                <div className="card" style={{width:"18rem"}}>
  <img src="/Images/d4.jpg" className="card-img-top" height="150px" alt="..."/>
  <div className="card-body text-center">
    <h5 className="card-title">Edgar Denzil</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Visit</a>
  </div>
</div>
                </div> 
            </div>
        </div>

        <HappyCustomer/>
        </>
    )
}