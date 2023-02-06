import React from "react";
import "./Style/index.css";
import { NavLink } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import deolite1 from "../../images/deolite.png";
import deolite2 from "../../images/deolite2.png";
import deolite3 from "../../images/deoliote3.png";
import deolite4 from "../../images/deoliote3.png";
import deolite5 from "../../images/deolite5.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import career_carousel from "../../../src/images/careerbg3.jpg";
import career_carousel_1 from "../../../src/images/career101.jpg";

const index = () => {
  return (
    <>
      <div className="career_container">
        <div className="career_header_section">
          <Carousel
            infiniteLoop
            autoPlay
            stopOnHover
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            interval={1000}
            axis={"vertical"}
          >
            <div>
              <img
                style={{ height: "449px" }}
                src={career_carousel}
                alt="career_carousel"
              ></img>
            </div>
            <div>
              <img src={career_carousel_1} alt="career_carousel"></img>
            </div>
            <div>
              <img src={career_carousel_1} alt="career_carousel"></img>
            </div>
          </Carousel>
          <div className="sub_navbar">
            <nav
              className="navbar navbar-expand-lg navbar-light"
              style={{
                width: "80%",
                "border-radius": "0.5rem",
                height: "3.2rem",
              }}
            >
              <div className="nav_list" style={{ marginLeft: "2rem" }}>
                <NavLink className="navbar-brand" href="#">
                  About us
                </NavLink>
              </div>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <NavLink className="nav-link" href="#">
                      Register <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" href="#">
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="career_body">
          <div className="two_column">
            <div className="career_social_icons">
              <div className="socio_icons">
                <NavLink
                  to="https://www.facebook.com/"
                  className="me-4 link-secondary"
                >
                  <i className="CiFacebook">
                    <CiFacebook />
                  </i>
                </NavLink>
                <NavLink
                  to="https://twitter.com/i/flow/login"
                  className="me-4 link-secondary"
                >
                  <i className="TiSocialTwitterCircular">
                    <TiSocialTwitterCircular />
                  </i>
                </NavLink>

                <NavLink
                  to="https://www.instagram.com/"
                  className="me-4 link-secondary"
                >
                  <i className="AiOutlineInstagram">
                    <AiOutlineInstagram />
                  </i>
                </NavLink>
                <NavLink
                  to="https://www.linkedin.com/home"
                  className="me-4 link-secondary"
                >
                  <i className="TiSocialLinkedinCircular">
                    <TiSocialLinkedinCircular />
                  </i>
                </NavLink>
              </div>
            </div>
            <div className="head_paras">
              <h2>Are you ready to take on the challenge?</h2>
              <p>
                Helping our clients grow while building a more sustainable, more
                inclusive future is a tough ask. But when you join <br />
                Accelgrowth, you join a thriving company and become part of a
                diverse global collective of free-thinkers, entrepreneurs and
                <br /> industry experts who are all driven to use technology to
                reimagine what’s possible.
                <br />
                <br />
                Together, we work to transform the world’s leading businesses
                while sharing knowledge and pushing ourselves to <br />
                do better. It’s how we shape great careers and give innovation
                that human touch the world needs.
                <br />
                <br /> Aceelgrowth. Get the future you want.
              </p>
            </div>
          </div>
          <div className="career_two_column"></div>
          <div className="why_accelgrowth">
            <h5 className="font-weight-4 less-mar1 line-height-4 text-warning opacity-9 whyacc">
              Overview
            </h5>
            <h2>WHY ACCELGROWTH ?</h2>
            <div className="ce-title-line"></div>
            <p style={{ marginTop: "2rem", alignItems: "center" }}>
              We love technological challenges and like to solve complex
              real-world problems with innovative software solutions using
              modern technology stacks and approaches. Our aim is to make
              technology easy and affordable for everyone. We are always open to
              new ideas which you think can change the traditional way of
              working and encourage people to push the boundaries, to start
              thinking where others might have stopped. <br /> <br />
              At Xgile-IT you will have the opportunity to work in a wide range
              of business domains and technologies. our technical experts will
              always be there to help and mentor you because we truly believe
              that as a family we can achieve and make a difference.
              <br /> <br />
              We believe that pride and passion in what you’re doing are key to
              producing excellent work on all of your projects. It’s about
              creatively developing solutions you can be proud of. We’re built
              around the philosophy that each and every one is given the same
              opportunity to excel and develop, regardless of how long you’ve
              been in the industry or at the company
              <br /> <br />
              Education is a life-long pursuit. We learn from one another, from
              industry leaders, from our mentors and from the newbs in the
              company. To us, knowledge is a precious resource that can only be
              multiplied by sharing it. Training is a focus for us and we offer
              every kind we can think of to make sure that you’re best equipped
              to stay up to date and enthusiastic in what you do. From
              online/offline classes to certifications, there’s no way you won’t
              find inspiration here.
            </p>
          </div>
          <div className="career_passion">
            <div className="passion_heading" style={{ marginTop: "1.5rem" }}>
              <h4>So, what’s your passion?</h4>
            </div>
            <div
              className="passion_para"
              style={{
                textAlign: "center",
                margin: "1.5rem 11rem 1.5rem 11rem",
              }}
            >
              <h6>
                All Newers are like family to us and we are proud to have a
                culture that is inclusive, transparent, and where each one of us
                experiences the joy of working together to deliver something
                wonderful. Come, join us, and be a part of this family today
              </h6>
            </div>
            <div className="passion_inputs">
              <form className="passion_inputs">
                <div className="form-group">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    style={{
                      width: "26rem",
                      height: "3rem",
                      marginRight: "1rem",
                    }}
                  >
                    <option>
                      Function <BsFillArrowDownCircleFill />
                    </option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    style={{
                      width: "26rem",
                      height: "3rem",
                      marginRight: "1rem",
                    }}
                  >
                    <option>Job Role ^</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    style={{ width: "26rem", height: "3rem" }}
                  >
                    <option>Search Here ^</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="dinamic_data">
              <h1>dinamic data is here</h1>
            </div>
            <div
              className="position_listed"
              style={{
                textAlign: "center",
                margin: "1.5rem 11rem 1.5rem 11rem",
              }}
            >
              <h6>
                Excited to work with us...But don't see your positions listed?
              </h6>
            </div>
            <div
              className="career-button"
              style={{
                textAlign: "center",
                margin: "1.5rem 11rem 1.5rem 11rem",
              }}
            >
              <button class="btn btn-primary" type="submit">
                Submit Your Resume
              </button>
            </div>
            <div
              className="career_branding"
              style={{
                backgroundColor: "rgb(240 240 240)",
                height: "12rem",
                width: "100%",
                "margin-bottom": "1rem",
              }}
            >
              <div
                className="branding_boxes"
                style={{
                  "margin-left": "2rem",
                  marginRight: "2rem",
                }}
              >
                <div className="brand_logo">
                  <NavLink to="/">
                    <img src={deolite1} alt="alt.pic" />
                  </NavLink>
                </div>
                <div className="brand_logo">
                  <NavLink to="/">
                    <img src={deolite2} alt="alt.pic" />
                  </NavLink>
                </div>
                <div className="brand_logo">
                  <NavLink to="/">
                    <img src={deolite3} alt="alt.pic" />
                  </NavLink>
                </div>
                <div className="brand_logo">
                  <NavLink to="/">
                    <img src={deolite4} alt="alt.pic" />
                  </NavLink>
                </div>
                <div className="brand_logo">
                  <NavLink to="/">
                    <img src={deolite5} alt="alt.pic" />
                  </NavLink>
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
