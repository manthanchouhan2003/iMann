import React from "react";
import "../CSS/Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="green-sec">
      <div className="footer-section">
        <div className="container px-4">
          <div className="row">
            <div className="col-md">
              <div className="logo-footer">
                <div className="org-logo mb-md-5 mb-3">
                  {" "}

                  <h1 className="white"><span>i</span>Mann<span>.</span></h1>
                </div>

                <div className="foot-content mb-5">
                  <h5 className="py-md-4">
                    A Software development company <br /> at heart of India❤️.
                  </h5>
                </div>

                <div class="social-icons-container">
  <a href="https://www.instagram.com/_manthan_chouhan_009?igsh=dzFxZWlrbmlsbjh2" target="_blank" rel="noopener noreferrer" class="social-icon">
  facebook
  </a>
  <a href="https://www.instagram.com/_manthan_chouhan_009?igsh=dzFxZWlrbmlsbjh2" target="_blank" rel="noopener noreferrer" class="social-icon">
   instagram
  </a>
  <a href="https://www.linkedin.com/in/manthan-chouhan-35ba4b220" target="_blank" rel="noopener noreferrer" class="social-icon">
  twitter
  </a>
  <a href="https://www.linkedin.com/in/manthan-chouhan-35ba4b220" target="_blank" rel="noopener noreferrer" class="social-icon">
    linkedin
  </a>
</div>


  </div>
            </div>
            <div className="col-md">
              <div className="contect-info">
                <div className="get-touvh mb-2">
                  GET IN TOUCH
                </div>
                <div className="email-engage mb-3">
                  <h6>
                    manthanchouhan2003@gmail.com
                  </h6>

                </div>
                <div className="contect-no mb-5 pb-md-5">
                  <h6>+91 9009855911</h6>
                </div>
              </div>
              <div className="explor mb-md-5 mb-3">EXPLORE</div>
              <div className="work-section mt-0 mb-3">
                {/* <Link className="text-decoration-none text-secondary " to="/work">Work</Link> */}
                <Link className="text-decoration-none text-secondary" to="/">Home</Link>
                <Link className="text-decoration-none text-secondary" to="/services">Service</Link>
                <Link className="text-decoration-none text-secondary" to="/about">About</Link>
                {/* <Link className="text-decoration-none text-secondary" to="/insights">Insights</Link> */}
                <Link className="text-decoration-none text-secondary" to="/contact">Contact</Link>
              </div>
              <div className="address">
                <p>B-159 MIG-Colony, Indore, Madhya-Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
