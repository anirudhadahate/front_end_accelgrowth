import React from "react";
import "../Services/Style/index.css";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div>
        <div className="star">
          <h1 className="my-5">Services</h1>
          <p>GET MANY MORE FEATURES</p>
        </div>
      </div>

      <section id="services" className="services">
        <header className="section-header">
          <h2>Services</h2>
          <p style={{ color: "white" }}>
            Our IT services converge business and technology experts to help to
            manage business processes of all categories.
          </p>
        </header>

        {/* <div className="container" data-aos="fade-up"> */}
        <div className="block ">
          <div className="service-box ">
            {/* <i className=" icon"></i> */}
            <h3>Automotive</h3>
            <p style={{ color: "black" }}>
              Expertise in IT consultancy for the IT companies, for their
              different working areas Web-app related.
            </p>
            <NavLink to="/" className="read-more">
              <span>Read More</span>
            </NavLink>
          </div>

          <div className="service-box ">
            {/* <i className=" icon"></i> */}
            <h3>Communications</h3>
            <p style={{ color: "black" }}>
              We provide all kind of IT management services of in the according
              to on their organization prioritie.
            </p>
            <NavLink to="/" className="read-more">
              <span>Read More</span>
            </NavLink>
          </div>

          <div className="service-box ">
            {/* <i className=" icon"></i> */}
            <h3>Customer & Retails</h3>
            <p style={{ color: "black" }}>
              Our firm is expert to create an efficient for user interface that
              makes design user interaction lively.
            </p>
            <NavLink to="/" className="read-more">
              <span>Read More</span>
            </NavLink>
          </div>

          <div className="service-box ">
            {/* <i className="ri-discuss-line icon"></i> */}
            <h3>Finance</h3>
            <p style={{ color: "black" }}>
              We develop, migrate and work on web applications to ensure that
              they run on capably on clouds.
            </p>
            <NavLink to="/" className="read-more">
              <span>Read More</span>
            </NavLink>
          </div>

          <div className="service-box ">
            {/* <i className="ri-discuss-line icon"></i> */}
            <h3>Healthcare</h3>
            <p style={{ color: "black" }}>
              We provide all kind of IT management services of in the according
              to on their organization prioritie.
            </p>
            <NavLink to="/" className="read-more">
              <span>Read More</span>
            </NavLink>
          </div>

          <div className="service-box">
            {/* <i className="ri-discuss-line icon"></i> */}
            <h3>Manufacturing</h3>
            <p style={{ color: "black" }}>
              Our firm is expert to create an efficient for user interface that
              makes design user interaction lively.
            </p>
            <NavLink to="/" className="read-more">
              <span>Read More</span>
            </NavLink>
          </div>

          <div className="service-box">
            {/* <i className="ri-discuss-line icon"></i> */}
            <h3>Media</h3>
            <p style={{ color: "black" }}>
              We develop, migrate and work on web applications to ensure that
              they run on capably on clouds.
            </p>
            <NavLink to="/" className="read-more">
              <span>Read More</span>
            </NavLink>
          </div>

          <div className="service-box">
            {/* <i className="ri-discuss-line icon"></i> */}
            <h3>Technology</h3>
            <p style={{ color: "black" }}>
              We provide all kind of IT management services of in the according
              to on their organization prioritie.
            </p>
            <NavLink to="/" className="read-more">
              <span>Read More</span>
            </NavLink>
          </div>
        </div>
      </section>

      <section id="cta" className="cta">
        <div className="text-center">
          <h3>
            We Provide Outsourced IT Services For Small &{" "}
            <span>Mid-Sized Business</span>{" "}
          </h3>
          <p>
            Appropriate for your specific business, making it easy for you to
            have quality IT services. What We Do
          </p>
          <NavLink className="cta-btn" href="#">
            MORE SERVICES
          </NavLink>
        </div>
      </section>
    </>
  );
};
export default Services;
