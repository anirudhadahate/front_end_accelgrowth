import React from "react";
import "../About/Style/index.css";
import A from "../../images/t1.jpg";
import B from "../../images/t2.jpg";
import C from "../../images/t3.jpg";
import D from "../../images/t4.jpg";
import E from "../../images/Authenticity.png";
import F from "../../images/Sirius_XM.svg";
import H from "../../images/clients_bg.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div className="head">
        <h1 className="my-5">-- About us --</h1>
        <p>GET MANY MORE FEATURES</p>
      </div>

      {/* ----About Section---- */}
      <section id="about" className="about">
        {/* < className="container" data-aos="fade-up"> */}

        <div className="row">
          <div className="aboutContainer">
            <h5 className="section">ABOUT ACCELGROWTH</h5>

            <p className="section-description">
              <h4 class="about-title">
                Focused on solutions for Global <span>Financial Services</span>{" "}
                and
                <span> Healthcare industries</span>
              </h4>
            </p>
          </div>

          <div
            className="container about-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-md-12 about-content">
              <h2 className="section">We provide great services and ideas</h2>
              <p className="about-text">
                Accelgrowth Technology Pvt. Ltd. specializes in providing
                perfect digital solutions in different business domain
                verticals, predominantly in Global Financial services and
                Healthcare industries. We have our operations in India.
              </p>
              <p className="about-text">
                Our qualified and experienced team has expertise in developing
                innovative, cost-effective and user-friendly software solutions
                like iOS and Android mobile apps for fintech and healthcare
                businesses. This includes web-based business intelligence
                systems for specific challenges using Social, Mobile, Analytics,
                Cloud and GIS (SMAC-G) capabilities. Our MEAN and MERN Stack
                (MongoDB, Express.js, Angular,React, Node.js) based applications
                offer users efficient and flexible tools for achieving the best
                resilience to adapt easily to new challenges.
              </p>

              <div class="about-text fs-16">
                <span>
                  Email to ask{" "}
                  <a href="mailto:support@accelgrowthtech.com" class="fw-500">
                    <u>any question</u>
                  </a>
                </span>
                <strong class="fs-18">
                  :{" "}
                  <a href="mailto:support@accelgrowthtech.com">
                    support@accelgrowthtech.com
                  </a>
                </strong>
              </div>
            </div>
          </div>
          {/* <div className="col-md-3"></div>   */}
        </div>

        {/* Our team  */}
        <div class="Team">
          <h2>OUR TEAM</h2>
        </div>

        <div class="Sequence">
          <div class="member">
            <div class="pic">
              <img src={A} class="img-fluid" alt="" />
            </div>
            <div class="member-info">
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
              <div class="social">
                <a href="">
                  <FaTwitter
                    margine={10}
                    padding={10}
                    size="25px"
                    color="white"
                  />
                </a>
                <a href="">
                  <FaFacebook
                    margine={10}
                    padding={10}
                    size="25px"
                    color="white"
                  />
                </a>
                <a href="">
                  <FaInstagram
                    margine={10}
                    padding={10}
                    size="25px"
                    color="white"
                  />
                </a>
                <a href="">
                  <FaLinkedin
                    margine={10}
                    padding={10}
                    size="25px"
                    color="white"
                  />
                </a>
              </div>
            </div>
          </div>

          <div class="member">
            <div class="pic">
              <img src={B} class="img-fluid" alt="" />
            </div>
            <div class="member-info">
              <h4>Sarah Jhonson</h4>
              <span>Product Manager</span>
              <div class="social">
                <a href="">
                  <FaTwitter size="25px" color="white" />
                </a>
                <a href="">
                  <FaFacebook size="25px" color="white" />
                </a>
                <a href="">
                  <FaInstagram size="25px" color="white" />
                </a>
                <a href="">
                  <FaLinkedin size="25px" color="white" />
                </a>
              </div>
            </div>
          </div>

          <div class="member">
            <div class="pic">
              <img src={C} class="img-fluid" alt="" />
            </div>
            <div class="member-info">
              <h4>William Anderson</h4>
              <span>CTO</span>
              <div class="social">
                <a href="">
                  <FaTwitter size="25px" color="white" />
                </a>
                <a href="">
                  <FaFacebook size="25px" color="white" />
                </a>
                <a href="">
                  <FaInstagram size="25px" color="white" />
                </a>
                <a href="">
                  <FaLinkedin size="25px" color="white" />
                </a>
              </div>
            </div>
          </div>

          <div class="member">
            <div class="pic">
              <img src={D} class="img-fluid" alt="" />
            </div>
            <div class="member-info">
              <h4>Amanda Jepson</h4>
              <span>Accountant</span>
              <div class="social">
                <a href="">
                  <FaTwitter size="25px" color="white" />
                </a>
                <a href="">
                  <FaFacebook size="25px" color="white" />
                </a>
                <a href="">
                  <FaInstagram size="25px" color="white" />
                </a>
                <a href="">
                  <FaLinkedin size="25px" color="white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="our_values">
          <div className="our_values_head">
            <h2>Our Values</h2>
            <h5>We are quite vocal and fanatical about our values</h5>
          </div>
          <div className="our_values_boxes">
            <div className="container">
              <div className="row">
                <div className="our_boxes col-md-4">
                  <div className="img_h5">
                    <img src={E} alt="Authenticity.logo" />
                    <h5>Authenticity</h5>
                  </div>
                  <ul style={{ fontSize: "17px", textAlign: "start" }}>
                    <li>I mean what I say and do</li>
                    <li>I mean what I say and do</li>
                  </ul>
                </div>
                <div className="our_boxes col-md-4">
                  <img src={E} alt="Authenticity.logo" />
                  <h5>People Centricity</h5>
                  <ul style={{ fontSize: "17px", textAlign: "start" }}>
                    <li>I value collaboration and teamwork</li>
                    <li>
                      Happiness, fulfillment, and growth of people matter to me
                    </li>
                  </ul>
                </div>
                <div className="our_boxes col-md-4">
                  <img src={E} alt="Authenticity.logo" />
                  <h5>Authenticity</h5>
                  <ul style={{ fontSize: "17px", textAlign: "start" }}>
                    <li>I mean what I say and do</li>
                    <li>I mean what I say and do</li>
                  </ul>
                </div>
                <hr />
                <div className="our_boxes col-md-4">
                  <img src={E} alt="Authenticity.logo" />
                  <h5>Authenticity</h5>
                  <ul style={{ fontSize: "17px", textAlign: "start" }}>
                    <li>I mean what I say and do</li>
                    <li>I mean what I say and do</li>
                  </ul>
                </div>
                <div className="our_boxes col-md-4">
                  <img src={E} alt="Authenticity.logo" />
                  <h5>Authenticity</h5>
                  <ul style={{ fontSize: "17px", textAlign: "start" }}>
                    <li>I mean what I say and do</li>
                    <li>I mean what I say and do</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our_client">
          <div className="client_head">
            <h3>Our Clients</h3>
            <h5>We have an enviable list of happy customers</h5>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h5>INDIA</h5>
                <div className="container">
                  <div className="row card_logos">
                    <div className="col-md-6">
                      <img src={F} alt="client.logo" />
                    </div>
                    <div className="col-md-6">
                      <img
                        style={{ marginLeft: "0.8rem" }}
                        src={F}
                        alt="client.logo"
                      />
                    </div>
                    <div className="col-md-6">
                      <img src={F} alt="client.logo" />
                    </div>
                    <div className="col-md-6">
                      <img
                        style={{ marginLeft: "0.8rem" }}
                        src={F}
                        alt="client.logo"
                      />
                    </div>
                    <div className="col-md-6">
                      <img src={F} alt="client.logo" />
                    </div>
                    <div className="col-md-6">
                      <img
                        style={{ marginLeft: "0.8rem" }}
                        src={F}
                        alt="client.logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <h5>AMERICA</h5>
                <div className="container">
                  <div className="row card_logos">
                    <div className="col-md-6">
                      <img src={F} alt="client.logo" />
                    </div>
                    <div className="col-md-6">
                      <img
                        style={{ marginLeft: "0.8rem" }}
                        src={F}
                        alt="client.logo"
                      />
                    </div>
                    <div className="col-md-6">
                      <img src={F} alt="client.logo" />
                    </div>
                    <div className="col-md-6">
                      <img
                        style={{ marginLeft: "0.8rem" }}
                        src={F}
                        alt="client.logo"
                      />
                    </div>
                    <div className="col-md-6">
                      <img src={F} alt="client.logo" />
                    </div>
                    <div className="col-md-6">
                      <img
                        style={{ marginLeft: "0.8rem" }}
                        src={F}
                        alt="client.logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <h5>Switzerland</h5>
                <div className="container">
                  <div className="row card_logos">
                    <div className="col-md-6">
                      <img src={F} alt="client.logo" />
                    </div>
                    <div className="col-md-6">
                      <img
                        style={{ marginLeft: "0.8rem" }}
                        src={F}
                        alt="client.logo"
                      />
                    </div>
                    <div className="col-md-6">
                      <img src={F} alt="client.logo" />
                    </div>
                    <div className="col-md-6">
                      <img
                        style={{ marginLeft: "0.8rem" }}
                        src={F}
                        alt="client.logo"
                      />
                    </div>
                    <div className="col-md-6">
                      <img src={F} alt="client.logo" />
                    </div>
                    <div className="col-md-6">
                      <img
                        style={{ marginLeft: "0.8rem" }}
                        src={F}
                        alt="client.logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <h5>Mauritius</h5>
                <div className="container">
                  <div className="row card_logos">
                    <div className="col-md-6">
                      <img src={F} alt="client.logo" />
                    </div>
                    <div className="col-md-6">
                      <img
                        style={{ marginLeft: "0.8rem" }}
                        src={F}
                        alt="client.logo"
                      />
                    </div>
                    <div className="col-md-6">
                      <img src={F} alt="client.logo" />
                    </div>
                    <div className="col-md-6">
                      <img
                        style={{ marginLeft: "0.8rem" }}
                        src={F}
                        alt="client.logo"
                      />
                    </div>
                    <div className="col-md-6">
                      <img src={F} alt="client.logo" />
                    </div>
                    <div className="col-md-6">
                      <img
                        style={{ marginLeft: "0.8rem" }}
                        src={F}
                        alt="client.logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our_values">
          <div className="our_values_head">
            <h2>Media Coverage</h2>
            <h5>Learn more about what’s going on at TO THE NEW</h5>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={H} alt="CardImage" />
                  <div className="card-body">
                    <h5 className="card-title">
                      IL Globo TV partners with VideoReady for its multi-geo OTT
                      services
                    </h5>
                    <p className="card-text">
                      TO THE NEW, a digital transformation and product
                      engineering service provider, has announced its
                      partnership with IL Globo TV. With this collaboration, TO
                      THE…
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={H} alt="CardImage" />
                  <div className="card-body">
                    <h5 className="card-title">
                      What is the role of big data in digital transformation?
                    </h5>
                    <p className="card-text">
                      By Narinder Kumar (Co-founder & COO, TO THE NEW) An
                      organization's success in the present day is governed by
                      its capacity to make sound, evidence-based…
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={H} alt="CardImage" />
                  <div className="card-body">
                    <h5 className="card-title">
                      What is the role of big data in digital transformation?
                    </h5>
                    <p className="card-text">
                      By Narinder Kumar (Co-founder & COO, TO THE NEW) An
                      organization's success in the present day is governed by
                      its capacity to make sound, evidence-based…
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
