import React from "react";
import "./Style/index.css";

function Services() {
  return (
    <div className="parallax-img2">
      <div className="services">
        <p style={{fontSize:'1.5rem'}}>Our Offerings</p>
        <h2>Industries We Specialized In</h2>
        <br />
        <hr />
        <div className="cards">
          <div className="card_services">
            <h3 >Automotive</h3>
            <p>
              Expertise in IT consultancy for the IT companies, for their
              different working areas web-app related.
            </p>
            <p className="cta-btn">Read More</p>
          </div>
          <div className="card_services">
            <h3>Communications</h3>
            <p>
              We provide all kind of IT management services of in the according
              to on their organization prioritie.
            </p>
            <p className="cta-btn">Read More</p>
          </div>
          <div className="card_services third_card">
            <h3>Customer & Retails</h3>
            <p>
              Our firm is expert to create an efficient for user interface that
              makes design user interaction lively.
            </p>
            <p className="cta-btn">Read More</p>
          </div>
          <div className="card_services">
            <h3>Finance</h3>
            <p>
              We develop, migrate and work on web applications to ensure that
              they run on capably on clouds.
            </p>
            <p className="cta-btn">Read More</p>
          </div>
        </div>
        <div className="cards">
          <div className="card_services">
            <h3>Healthcare</h3>
            <p>
              We provide all kind of IT management services of in the according
              to on their organization prioritie.
            </p>
            <p className="cta-btn">Read More</p>
          </div>
          <div className="card_services">
            <h3>Manufacturing</h3>
            <p>
              Our firm is expert to create an efficient for user interface that
              makes design user interaction lively.
            </p>
            <p className="cta-btn">Read More</p>
          </div>
          <div className="card_services">
            <h3>Media</h3>
            <p>
              We develop, migrate and work on web applications to ensure that
              they run on capably on clouds.
            </p>
            <p className="cta-btn">Read More</p>
          </div>
          <div className="card_services">
            <h3>Public Sector</h3>
            <p>
              We’re able to optimally address challenges and requirements to
              effectively develop solid working solutions.{" "}
            </p>
            <p className="cta-btn">Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
