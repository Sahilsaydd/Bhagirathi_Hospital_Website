import React, { useEffect } from "react";
import Header from "../Heading_component/Heading";
import 'aos/dist/aos.css'
import Aos from "aos";
export default function Blog(){

     useEffect(()=>{
            Aos.init({
                duration:1000
            });
            
            },[])
    return(
        <>
        <Header heading="Blog"/>
        
       <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-md-12">
                <div className="text-center" >
                    <h4 className="Heading_color mb-2"  data-aos="fade-down"><b>OUR LARGEST BLOG</b></h4>
                    <h2 className="" data-aos="zoom-in"><b>Latest Posts & Articles</b></h2>
                </div>
            </div>
        </div>
       </div>


       <div className="container py-5">
        <div className="row">
            <div className="col-md-4" data-aos="fade-right">
                <div className="blog_img rounded-top-3" data-aos="zoom-in">
                    <div className="p-1 rounded-end-3 w-25 text-center blog_title " data-aos="fade-right">
                        <h5 data-aos="zoom-in">Medical</h5>
                    </div>
                    <div className="  text-center  date-box">
                       <h5 data-aos="zoom-in"><b>May <br />02</b></h5> 
                    </div>
                </div>
                <div className="border p-3 rounded-bottom-3">
                <i className="fa fa-user" data-aos="zoom-in"></i><small className=" ms-2 me-2" data-aos="zoom-in">By : Admin</small>
                <i className="fa fa-comment" data-aos="zoom-in"></i>
           <small data-aos="zoom-in">     Comment</small>

           <h5 className="mt-2" style={{color:'#002261'}} data-aos="zoom-in"><b>Medical Of This Working Health Blog</b></h5>
           <p className="" data-aos="zoom-in">Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.</p>

           <a href="#" className="text-decoration-none" data-aos="zoom-in">Read More <i className="fa-solid fa-arrow-right ms-2" data-aos="fade-right"></i></a>
                </div>
                <div>

                </div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
                <div className="blog_img rounded-top-3" data-aos="zoom-in">
                    <div className="p-1 rounded-end-3 w-25 text-center blog_title " data-aos="fade-right">
                        <h5 data-aos="zoom-in">Medical</h5>
                    </div>
                    <div className="  text-center  date-box">
                       <h5 data-aos="zoom-in"><b>May <br />02</b></h5> 
                    </div>
                </div>
                <div className="border p-3 rounded-bottom-3">
                <i className="fa fa-user" data-aos="zoom-in"></i><small className=" ms-2 me-2" data-aos="zoom-in">By : Admin</small>
                <i className="fa fa-comment" data-aos="zoom-in"></i>
           <small data-aos="zoom-in">     Comment</small>

           <h5 className="mt-2" style={{color:'#002261'}} data-aos="zoom-in"><b>Medical Of This Working Health Blog</b></h5>
           <p className="" data-aos="zoom-in">Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.</p>

           <a href="#" className="text-decoration-none" data-aos="zoom-in">Read More <i className="fa-solid fa-arrow-right ms-2" data-aos="fade-right"></i></a>
                </div>
                <div>

                </div>
            </div>
            <div className="col-md-4" data-aos="fade-left">
                <div className="blog_img rounded-top-3" data-aos="zoom-in">
                    <div className="p-1 rounded-end-3 w-25 text-center blog_title " data-aos="fade-right">
                        <h5 data-aos="zoom-in">Medical</h5>
                    </div>
                    <div className="  text-center  date-box">
                       <h5 data-aos="zoom-in"><b>May <br />02</b></h5> 
                    </div>
                </div>
                <div className="border p-3 rounded-bottom-3">
                <i className="fa fa-user" data-aos="zoom-in"></i><small className=" ms-2 me-2" data-aos="zoom-in">By : Admin</small>
                <i className="fa fa-comment" data-aos="zoom-in"></i>
           <small data-aos="zoom-in">     Comment</small>

           <h5 className="mt-2" style={{color:'#002261'}} data-aos="zoom-in"><b>Medical Of This Working Health Blog</b></h5>
           <p className="" data-aos="zoom-in">Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.</p>

           <a href="#" className="text-decoration-none" data-aos="zoom-in">Read More <i className="fa-solid fa-arrow-right ms-2" data-aos="fade-right"></i></a>
                </div>
                <div>

                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4" data-aos="fade-right">
                <div className="blog_img rounded-top-3" data-aos="zoom-in">
                    <div className="p-1 rounded-end-3 w-25 text-center blog_title " data-aos="fade-right">
                        <h5 data-aos="zoom-in">Medical</h5>
                    </div>
                    <div className="  text-center  date-box">
                       <h5 data-aos="zoom-in"><b>May <br />02</b></h5> 
                    </div>
                </div>
                <div className="border p-3 rounded-bottom-3">
                <i className="fa fa-user" data-aos="zoom-in"></i><small className=" ms-2 me-2" data-aos="zoom-in">By : Admin</small>
                <i className="fa fa-comment" data-aos="zoom-in"></i>
           <small data-aos="zoom-in">     Comment</small>

           <h5 className="mt-2" style={{color:'#002261'}} data-aos="zoom-in"><b>Medical Of This Working Health Blog</b></h5>
           <p className="" data-aos="zoom-in">Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.</p>

           <a href="#" className="text-decoration-none" data-aos="zoom-in">Read More <i className="fa-solid fa-arrow-right ms-2" data-aos="fade-right"></i></a>
                </div>
                <div>

                </div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
                <div className="blog_img rounded-top-3" data-aos="zoom-in">
                    <div className="p-1 rounded-end-3 w-25 text-center blog_title " data-aos="fade-right">
                        <h5 data-aos="zoom-in">Medical</h5>
                    </div>
                    <div className="  text-center  date-box">
                       <h5 data-aos="zoom-in"><b>May <br />02</b></h5> 
                    </div>
                </div>
                <div className="border p-3 rounded-bottom-3">
                <i className="fa fa-user" data-aos="zoom-in"></i><small className=" ms-2 me-2" data-aos="zoom-in">By : Admin</small>
                <i className="fa fa-comment" data-aos="zoom-in"></i>
           <small data-aos="zoom-in">     Comment</small>

           <h5 className="mt-2" style={{color:'#002261'}} data-aos="zoom-in"><b>Medical Of This Working Health Blog</b></h5>
           <p className="" data-aos="zoom-in">Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.</p>

           <a href="#" className="text-decoration-none" data-aos="zoom-in">Read More <i className="fa-solid fa-arrow-right ms-2" data-aos="fade-right"></i></a>
                </div>
                <div>

                </div>
            </div>
            <div className="col-md-4" data-aos="fade-left">
                <div className="blog_img rounded-top-3" data-aos="zoom-in">
                    <div className="p-1 rounded-end-3 w-25 text-center blog_title " data-aos="fade-right">
                        <h5 data-aos="zoom-in">Medical</h5>
                    </div>
                    <div className="  text-center blog_title date-box">
                       <h5 data-aos="zoom-in"><b>May <br />02</b></h5> 
                    </div>
                </div>
                <div className="border p-3 rounded-bottom-3">
                <i className="fa fa-user" data-aos="zoom-in"></i><small className=" ms-2 me-2" data-aos="zoom-in">By : Admin</small>
                <i className="fa fa-comment" data-aos="zoom-in"></i>
           <small data-aos="zoom-in">     Comment</small>

           <h5 className="mt-2" style={{color:'#002261'}} data-aos="zoom-in"><b>Medical Of This Working Health Blog</b></h5>
           <p className="" data-aos="zoom-in">Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.</p>

           <a href="#" className="text-decoration-none" data-aos="zoom-in">Read More <i className="fa-solid fa-arrow-right ms-2" data-aos="fade-right"></i></a>
                </div>
                <div>

                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4" data-aos="fade-right">
                <div className="blog_img rounded-top-3" data-aos="zoom-in">
                    <div className="p-1 rounded-end-3 w-25 text-center blog_title " data-aos="fade-right">
                        <h5 data-aos="zoom-in">Medical</h5>
                    </div>
                    <div className="  text-center  date-box">
                       <h5 data-aos="zoom-in"><b>May <br />02</b></h5> 
                    </div>
                </div>
                <div className="border p-3 rounded-bottom-3">
                <i className="fa fa-user" data-aos="zoom-in"></i><small className=" ms-2 me-2" data-aos="zoom-in">By : Admin</small>
                <i className="fa fa-comment" data-aos="zoom-in"></i>
           <small data-aos="zoom-in">     Comment</small>

           <h5 className="mt-2" style={{color:'#002261'}} data-aos="zoom-in"><b>Medical Of This Working Health Blog</b></h5>
           <p className="" data-aos="zoom-in">Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.</p>

           <a href="#" className="text-decoration-none" data-aos="zoom-in">Read More <i className="fa-solid fa-arrow-right ms-2" data-aos="fade-right"></i></a>
                </div>
                <div>

                </div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
                <div className="blog_img rounded-top-3" data-aos="zoom-in">
                    <div className="p-1 rounded-end-3 w-25 text-center blog_title " data-aos="fade-right">
                        <h5 data-aos="zoom-in">Medical</h5>
                    </div>
                    <div className="  text-center  date-box">
                       <h5 data-aos="zoom-in"><b>May <br />02</b></h5> 
                    </div>
                </div>
                <div className="border p-3 rounded-bottom-3">
                <i className="fa fa-user" data-aos="zoom-in"></i><small className=" ms-2 me-2" data-aos="zoom-in">By : Admin</small>
                <i className="fa fa-comment" data-aos="zoom-in"></i>
           <small data-aos="zoom-in">     Comment</small>

           <h5 className="mt-2" style={{color:'#002261'}} data-aos="zoom-in"><b>Medical Of This Working Health Blog</b></h5>
           <p className="" data-aos="zoom-in">Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.</p>

           <a href="#" className="text-decoration-none" data-aos="zoom-in">Read More <i className="fa-solid fa-arrow-right ms-2" data-aos="fade-right"></i></a>
                </div>
                <div>

                </div>
            </div>
            <div className="col-md-4" data-aos="fade-left">
                <div className="blog_img rounded-top-3" data-aos="zoom-in">
                    <div className="p-1 rounded-end-3 w-25 text-center blog_title " data-aos="fade-right">
                        <h5 data-aos="zoom-in">Medical</h5>
                    </div>
                    <div className="  text-center  date-box">
                       <h5 data-aos="zoom-in"><b>May <br />02</b></h5> 
                    </div>
                </div>
                <div className="border p-3 rounded-bottom-3">
                <i className="fa fa-user" data-aos="zoom-in"></i><small className=" ms-2 me-2" data-aos="zoom-in">By : Admin</small>
                <i className="fa fa-comment" data-aos="zoom-in"></i>
           <small data-aos="zoom-in">     Comment</small>

           <h5 className="mt-2" style={{color:'#002261'}} data-aos="zoom-in"><b>Medical Of This Working Health Blog</b></h5>
           <p className="" data-aos="zoom-in">Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.</p>

           <a href="#" className="text-decoration-none" data-aos="zoom-in">Read More <i className="fa-solid fa-arrow-right ms-2" data-aos="fade-right"></i></a>
                </div>
                <div>

                </div>
            </div>
        </div>
       </div>
        </>
    )
}