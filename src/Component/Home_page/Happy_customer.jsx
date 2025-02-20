import React, { useEffect, useState } from "react";
import 'aos/dist/aos.css'
import Aos from "aos";
export default function HappyCustomer() {
  const [happyCustomerCount, setHappyCustomerCount] = useState(0);
  const [customerVisitCount, setCustomerVisitCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    const animateCounter = (setter, targetCount) => {
      let count = 0;
      const interval = setInterval(() => {
        if (count < targetCount) {
          count++;
          setter(count);
        } else {
          clearInterval(interval);
        }
      }, 10);
    };

    animateCounter(setHappyCustomerCount, 1200);
    animateCounter(setCustomerVisitCount, 1200);
    animateCounter(setLikeCount, 1200);

    
      
        Aos.init({
            duration:500
        });
        
        
  }, []);

    
  return (
    <div className="container mt-5">
      <section className="happy-customers-section text-center  p-5">
        <h2 className="mb-4 fw-bold Heading_color" data-aos="fade-down">Happy Patient</h2>
        <p className="lead mb-4"  data-aos="fade-down">
          Over the years, we have helped thousands of patient achieve better vision.
        </p>
        <div className="row">
          {/* Happy Customer Count */}
          <div className="col-md-4 mb-4 " data-aos="fade-right">
            <div className="card metric-card bg-happy">
              <div className="card-body">
                <i className="fas fa-smile metric-icon"></i>
                <div className="metric-count">{happyCustomerCount}+</div>
                <div className="metric-label">Happy Patient</div>
              </div>
            </div>
          </div>

          {/* Customer Visits Count */}
          <div className="col-md-4 mb-4"  data-aos="fade-down">
            <div className="card metric-card bg-visit">
              <div className="card-body">
                <i className="fas fa-users metric-icon"></i>
                <div className="metric-count">{customerVisitCount}+</div>
                <div className="metric-label">Customer Visits</div>
              </div>
            </div>
          </div>

          {/* Likes Count */}
          <div className="col-md-4 mb-4"  data-aos="fade-left">
            <div className="card metric-card bg-like">
              <div className="card-body">
                <i className="fas fa-thumbs-up metric-icon"></i>
                <div className="metric-count">{likeCount}+</div>
                <div className="metric-label">Likes</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
