import React, { useEffect }  from "react"; 
import { NavLink } from "react-router-dom";
import 'aos/dist/aos.css'
import Aos from "aos";
export default function Header(props){
useEffect(()=>{
Aos.init({
    duration:1000
});

},[])
    return(

        <>
        
        <div className="container-fluid">
        <div className="row border-bottom">
            <div className="col-4 p-3 " style={{"position":"relative"}}>
                
                <div className="shadow p-5 mt-3 rounded-4 " data-aos="fade-right" id="headerbox">
                    <h1 className="text-center"><b>{props.heading}</b></h1>
                    <h4 className="text-center"><NavLink to="/" className="text-decoration-none text-danger">Home <span id="icon_size"><i class="fa-solid fa-angle-right text-dark "></i></span> <span className="text-dark">{props.heading}</span></NavLink>  </h4>
                </div>

            </div>
            <div className="col-8 header_image rounded-2 p-5" data-aos="fade-left">
                
            </div>
        </div>
    </div>



        
        </>
    )
}