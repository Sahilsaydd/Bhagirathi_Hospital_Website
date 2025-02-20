import React from "react";

export default function Slider() {
  return (
    <>
      <div className="container-fluid py-3">
        <div className="row">
          <div className="col-md-12">
            <div className="Slider_Height">
              <div
                id="carouselExampleRide"
                class="carousel slide"
                data-bs-ride="true"
              >
                <div className="carousel-inner">
                  <div className="carousel-item  ">
                     <img
                      src="/Images/img1.jpg"
                      className="d-block w-100 h-50 "
                      alt="..."
                    /> 
                   
                  </div>
                  <div className="carousel-item active">
                    <img
                      src="/Images/img2.jpg"
                      className="d-block w-100  h-50"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/Images/img3.jpg"
                      className="d-block w-100  h-50"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleRide"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleRide"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
