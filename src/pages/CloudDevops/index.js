import React from "react";
import "./Style/index.css";
import I from "../../images/devops_logo.png";
import J from "../../images/awslogo.png";
import K from "../../images/googlecloud_logo.png";
import L from "../../images/microsoftAzureLogo.png";
import M from "../../images/alibaba_cloud.png";
import N from "../../images/aws_partner.png";
import H from "../../images/clients_bg.jpg";
import O from "../../images/iso.avif";
import P from "../../images/gartner.png";
import Q from "../../images/starwards.png";

import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className="cloud_devops">
        <div className="cloud_devops_header">
          <h1 style={{ color: "white" }}>Cloud & DevOps</h1>
          <h4 style={{ color: "white" }}>
            Leveraging our deep expertise in Cloud & DevOps to help customers
            define, execute and manage their Cloud journey
          </h4>
        </div>
        <div
          className="cloud_devops_Our_Services"
          style={{ textAlign: "center" }}
        >
          <div className="cloud_devops_Our_Services_head">
            <h2>Our Services</h2>
            <h6>
              TO THE NEW leverages its deep expertise in Cloud to help clients
              across the globe in their different stages of Cloud journey
              including consulting, migration, 24x7 managed services, DevOps,
              and cost optimization
            </h6>
          </div>
          <div className="cloud_devops_cards">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="card" style={{ width: "25rem" }}>
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
                <div className="col-md-6">
                  <div className="card" style={{ width: "25rem" }}>
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
        </div>

        <div className="cloud_devops_Cloudkeeper">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="Cloudkeeper_left">
                  <h3>
                    Save 5-15% on your AWS spends with our in-house Cloud Spend
                    Optimization Solution, Cloudkeeper
                  </h3>
                  <p>No hidden costs. Instant cost saving.</p>
                  <button type="button" class="btn btn-outline-danger">
                    Explore Now
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  style={{ height: "12rem", width: "30rem" }}
                  src={I}
                  alt="cloud_devops_Cloudkeeper"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="Our_Cloud_Capabilities">
          <div
            className="Our_Cloud_Capabilities_head"
            style={{ textAlign: "center" }}
          >
            <h2>Our Cloud Capabilities</h2>
            <p>
              TO THE NEW offers Cloud & DevOps services on all leading Cloud
              Platforms
            </p>
          </div>
          <div className="Our_Cloud_Capabilities_logos">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <img style={{ height: "8rem" }} src={J} alt="" />
                </div>
                <div className="col-md-3">
                  <img style={{ height: "10rem" }} src={K} alt="" />
                </div>
                <div className="col-md-3">
                  <img style={{ height: "10rem" }} src={L} alt="" />
                </div>
                <div className="col-md-3">
                  <img style={{ height: "10rem" }} src={M} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Recognitions_certification">
          <div className="Recognitions_certification_head">
            <h3>Recognitions & Certifications</h3>
          </div>
          <div className="Recognitions_certification_logos">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <img
                    style={{ height: "12rem" }}
                    src={O}
                    alt="certification"
                  />
                </div>
                <div className="col-md-4">
                  <img
                    style={{ height: "12rem" }}
                    src={P}
                    alt="certification"
                  />
                </div>
                <div className="col-md-4">
                  <img
                    style={{ height: "12rem" }}
                    src={Q}
                    alt="certification"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="talk_expertise">
          <h3 style={{ color: "white" }}>
            Leverage our expertise in Cloud & DevOps!
          </h3>
          <button type="button" class="btn btn-outline-light">
            Talk To Experts
          </button>
        </div>
        <div className="Our_AWS_Partnership">
          <div
            className="Our_AWS_Partnership_head"
            style={{ textAlign: "center" }}
          >
            <h2>Our AWS Partnership</h2>
            <h6>
              We have 10+ years of experience on AWS Cloud, with 80+ AWS
              certified Architects and 300+ AWS accredited Engineers. TO THE NEW
              is an “AWS Premier Consulting Partner”, which is the highest tier
              of AWS partnership with certified competencies
            </h6>
          </div>
          <div className="container">
            <div className="row" style={{ textAlign: "center" }}>
              <div className="col-md-2">
                <img style={{ height: "8rem" }} src={N} alt="" />
                <NavLink to="/">Data & Analytics</NavLink>
              </div>
              <div className="col-md-2">
                <img style={{ height: "8rem" }} src={N} alt="" />
                <NavLink to="/">DevOps</NavLink>
              </div>
              <div className="col-md-2">
                <img style={{ height: "8rem" }} src={N} alt="" />
                <NavLink to="/">Migration</NavLink>
              </div>
              <div className="col-md-2">
                <img style={{ height: "8rem" }} src={N} alt="" />
                <NavLink to="/">MSPPartner</NavLink>
              </div>
              <div className="col-md-2">
                <img style={{ height: "8rem" }} src={N} alt="" />
                <NavLink to="/">Public Sector Partner</NavLink>
              </div>
              <div className="col-md-2">
                <img style={{ height: "8rem" }} src={N} alt="" />
                <NavLink to="/">Solution Provider</NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="Success_Stories">
          <div className="Success_Stories_head">
            <h3>Success Stories</h3>
            <h6>Our work speaks for itself and we are proud of it</h6>
          </div>
          <div className="Success_Stories_cards">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div class="card" style={{ width: "20rem" }}>
                    <img class="card-img-top" src={H} alt="card-img-top" />
                    <div className="tata_play">
                      <h2>tata play</h2>
                    </div>
                    <div class="card-body">
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <p style={{ color: "blueviolet" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="card" style={{ width: "20rem" }}>
                    <img class="card-img-top" src={H} alt="card-img-top" />
                    <div className="tata_play">
                      <h2>tata play</h2>
                    </div>
                    <div class="card-body">
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <p style={{ color: "blueviolet" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="card" style={{ width: "20rem" }}>
                    <img class="card-img-top" src={H} alt="card-img-top" />
                    <div className="tata_play">
                      <h2>tata play</h2>
                    </div>
                    <div class="card-body">
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <p style={{ color: "blueviolet" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default index;
