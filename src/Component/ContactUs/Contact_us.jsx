import React, { useEffect } from "react";
import Header from "../Heading_component/Heading";
import "aos/dist/aos.css";
import Aos from "aos";
export default function Contact_us() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Header heading="Contact" />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center" data-aos="fade-down">
            <h1  data-aos="zoom-in" className="Heading_color">Contact Us</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 mt-3 ">
        <div className="row">

       
        <div className="col-md-6 border"  data-aos="fade-right">
          <div className="  p-2">
            <h3 className=""  data-aos="zoom-in"style={{ color: "#002261" }}>
              <b>Contact Us</b>
            </h3>
            <h4 className="mt-3"  data-aos="zoom-in">
              <b>Meet Our Specialist This Doctor Meet</b>
            </h4>
          </div>

          <div className="row">
            <div className="col-md-6 p-4" >
              <input
                type="text"
                name=""
                id=""
                className="form-control bg-body-tertiary mt-3"
                placeholder="Enter Name"  data-aos="zoom-in"
              / >
              <input
                type="text"
                name=""
                id=""
                className="form-control bg-body-tertiary mt-3"
                placeholder="Your Subject" data-aos="zoom-in"
              />
            </div>
            <div className="col-md-6 p-4">
              <input
                type="text"
                name=""
                id=""
                className="form-control bg-body-tertiary mt-3"
                placeholder="Your Email " data-aos="zoom-in"
              />
              <input
                type="text"
                name=""
                id=""
                className="form-control bg-body-tertiary mt-3"
                placeholder="Your Phone" data-aos="zoom-in"
              />
            </div>
            <div className="row">
              <div className="col-md-12 p-4">
                <textarea
                  name=""
                  id=""
                  cols="10"
                  rows="3"
                  className="form-control bg-body-tertiary " data-aos="zoom-in"
                ></textarea>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-md-12">
                <div className="text-center">
                  <button className="btn btn-outline-primary rounded-3 p-2 " data-aos="zoom-in">
                    Send Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4" data-aos="zoom-in">
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5990424903484!2d74.73312077497742!3d19.08135868212435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb0585a2a570f%3A0xc944541127778d68!2sBhagirathi%20Accident%20Hospital!5e0!3m2!1sen!2sin!4v1739951664784!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{border:'0'}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
