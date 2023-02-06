import React from "react";
import "./Style/index.css";
import about_image from "../../../assets/images/offering1.jpg";
const AboutUs = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 AboutUs_leftimage">
            <img
              src={about_image}
              alt="about_image"
              style={{ width: "33rem", height: "30rem" }}
            />
          </div>
          <div className="col-md-6">
            <p style={{ color: "orange", height: "28px" }}>
              What we are and What we do
            </p>
            <h3>Focused on solutions for Global</h3>
            <h3
              style={{
                fontStyle: "italic",
                color: "rgb(237, 77, 44)",
              }}
            >
              Financial Services
              <span style={{ fontStyle: "normal", color: "black" }}> and</span>
              Healthcare
            </h3>
            <p>
              Accelgrowth Technology Pvt. Ltd. specializes in providing perfect
              digital solutions in different business domain verticals,
              predominantly in Global Financial services and Healthcare
              industries. We have our operations in India.
            </p>
            <p>
              Our qualified and experienced team has expertise in developing
              innovative, cost-effective and user-friendly software solutions
              like iOS and Android mobile apps for fintech and healthcare
              businesses. This includes web-based business intelligence systems
              for specific challenges using Social, Mobile, Analytics, Cloud and
              GIS (SMAC-G) capabilities. Our MEAN and MERN Stack (MongoDB,
              Express.js, Angular,React, Node.js) based applications offer users
              efficient and flexible tools for achieving the best resilience to
              adapt easily to new challenges.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="aboutUs">
        <div className="aboutUs_right_side">
          <p style={{ color: "orange", fontSize: "2rem", height: "28px" }}>
            What we are and What we do
          </p>
          <h3 style={{ fontSize: "4rem" }}>Focused on solutions for Global</h3>
          <h3
            style={{
              fontStyle: "italic",
              color: "rgb(237, 77, 44)",
              fontSize: "4rem",
            }}
          >
            Financial Services
            <span style={{ fontStyle: "normal", color: "black" }}> and</span>
            Healthcare
          </h3>
          <p>
            Accelgrowth Technology Pvt. Ltd. specializes in providing perfect
            digital solutions in different business domain verticals,
            predominantly in Global Financial services and Healthcare
            industries. We have our operations in India.
          </p>
          <p>
            Our qualified and experienced team has expertise in developing
            innovative, cost-effective and user-friendly software solutions like
            iOS and Android mobile apps for fintech and healthcare businesses.
            This includes web-based business intelligence systems for specific
            challenges using Social, Mobile, Analytics, Cloud and GIS (SMAC-G)
            capabilities. Our MEAN and MERN Stack (MongoDB, Express.js,
            Angular,React, Node.js) based applications offer users efficient and
            flexible tools for achieving the best resilience to adapt easily to
            new challenges.
          </p>
        </div>
      </div> */}
    </>
  );
};

export default AboutUs;
