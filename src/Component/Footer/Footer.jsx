import React from "react";
export default function Footer(){
    return(<>
    <>
  {/* Site footer */}
  <footer className="site-footer bg-light overflow-hidden" style={{borderTop:"2px solid #e94545"}}>
    <div className="container" >
      <h1 className="text-danger">Bhagirathi Hospital</h1>
      <div className="row mt-4">
        <div className="col-sm-12 col-md-6">
          <h6 className="text-dark mb-3">About</h6>
          <p className="text-justify">
            Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
            help the upcoming programmers with the code. Scanfcode focuses on
            providing the most efficient code or snippets as the code wants to
            be simple. We will help programmers build up concepts in different
            programming languages that include C, C++, Java, HTML, CSS,
            Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
          </p>
        </div>
        <div className="col-xs-6 col-md-3">
          <h6 className="text-dark mb-3">Quick Links</h6>
          <ul className="footer-links">
            <li className="footli">
              <a href="http://scanfcode.com/about/">Home</a>
            </li>
            <li className="footli">
              <a href="http://scanfcode.com/contact/">About</a>
            </li>
            <li className="footli">
              <a href="http://scanfcode.com/contribute-at-scanfcode/">
                Service
              </a>
            </li>
      
            <li className="footli">
              <a href="http://scanfcode.com/sitemap/">Blog</a>
            </li>
            <li className="footli">
              <a href="http://scanfcode.com/sitemap/">Gallery</a>
            </li>
            <li className="footli">
              <a href="http://scanfcode.com/sitemap/">contact us</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 text-dark text-left ">
          <h6 className="text-dark mb-3">contact us</h6>
          <li className="footcontact text-danger fs-5">
            {" "}
            <ion-icon
              name="location-outline"
              className="text-danger footicon"
            />
            <p className="footp text-dark fs-6">
              PADMA NAGAR, opp. PRIME CARE HOSPITAL, Ekvira Chowk, Juna
              Pimplgoan Road, Savedi, Ahmednagar - 414003
            </p>
          </li>
          <li className="footcontact text-danger fs-5">
            {" "}
            <ion-icon name="call-outline" className="text-danger footicon" />
            <p className="footp text-dark fs-6">+91 8446171061</p>
          </li>
          <li className="footcontact text-danger fs-5">
            {" "}
            <ion-icon
              name="mail-unread-outline"
              className="text-danger footicon"
            />
            <p className="footp text-dark fs-6">bhagirathihospital@gmail.com</p>
          </li>
          <ul></ul>
        </div>
      </div>
      <hr />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">Copyright © All Rights Reserved.</p>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li>
              <a className=" facebook btn-outline-danger" href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a className="twitter" href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a className="dribbble" href="#">
                <i className="fa fa-dribbble" />
              </a>
            </li>
            <li>
              <a className="linkedin" href="#">
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</>

    </>)
}