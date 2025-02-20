import React, { useEffect } from "react";  
import 'aos/dist/aos.css'
import Aos from "aos";
import Header from "../Heading_component/Heading";
export default function Form(){

useEffect(()=>{
    
    const datePicker = document.getElementById("datePicker");
    const today = new Date();
    
    // Format date to YYYY-MM-DD
    function formatDate(date) {
        return date.toISOString().split("T")[0];
    }

    // Set min (today) and max (today + 2 days)
    const minDate = formatDate(today);
    const maxDate = formatDate(new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000));

    datePicker.min = minDate;
    datePicker.max = maxDate;



    const timePicker = document.getElementById("timePicker");

    // Set min and max time values
    timePicker.min = "07:00";
    timePicker.max = "19:00";

    // Prevent invalid selections
    timePicker.addEventListener("input", function () {
        const selectedTime = this.value;
        if (selectedTime < "07:00" || selectedTime > "19:00") {
            alert("Please select a time between 7:00 AM and 7:00 PM.");
            this.value = ""; // Reset invalid input
        }

    });



    Aos.init({
        duration:1000
    });
    
 
},[])

    return(
        <>

        <Header heading="Book Appoinment"></Header>
        <div className="container py-5" data-aos="zoom-in">
        <div class="row justify-content-center mt-5">
        <div class="card shadow p-3">
            <h2 class="text-center mb-4">Book Appointment</h2>
            <form>
                <div class="row">
                <div class=" col-md-6 mb-3">
                    <label class="form-label">Patient Full Name</label>
                    <input type="text" class="form-control" placeholder="Enter your name" required/>
                </div>
                
                <div class=" col-md-6 mb-3">
                    <label class="form-label">Phone Number</label>
                    <input type="number" class="form-control" placeholder="Enter your phone number"/>
                </div>

                <div class=" col-md-6 mb-3">
                    <label class="form-label">Date</label>
                    <input type="date" class="form-control" id="datePicker"/>
                   
    
                </div>
                <div class=" col-md-6 mb-3">
                    <label class="form-label">Time</label>
                    
                    <input type="time" class="form-control" id="timePicker"/>

                 

                </div>


                <div class=" col-md-6 mb-3">
                    <label class="form-label">Patient Address</label>
                    <textarea class="form-control" rows="4" placeholder="Enter your Address" required></textarea>
                </div>

                <div class=" col-md-6 mb-3">
                    <label class="form-label">Message</label>
                    <textarea class="form-control" rows="4" placeholder="Enter your message" required></textarea>
                </div>
            </div>
        <div className="text-center">

                <button type="submit" class="btn btn-primary ">Book Appointmemnt</button>
        </div>
            </form>
        </div>
    
    </div>
        
    </div>
        </>
    )
}