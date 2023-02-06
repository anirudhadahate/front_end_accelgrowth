import React from "react";
import "antd/dist/antd.min.css";
import { Form, Input, Button } from "antd";
import "./Style/index.css";
import { NavLink } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
const { TextArea } = Input;

const ContactUs = () => {
  return (
    <>
      <div className="Contact_Us">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="left-column">
                <ul>
                  <li>
                    <NavLink style={{ color: "#d9177f" }}>
                      Request for services
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink>Join our team</NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink>Media queries</NavLink>
                  </li>
                  <hr />
                </ul>
              </div>
            </div>
            <div className="col-md-9 r_c">
              <div className="right-column">
                <div className="App">
                  <div className="contact_heading">
                    <h4>Contact Form</h4>
                    <h6>
                      For General information or any queries. Contact us
                      directly or fill out the form.
                    </h6>
                  </div>
                  <div className="App-header">
                    <Form className="content">
                      <Form.Item>
                        <label>
                          User Name <em>*</em>
                        </label>
                        <br />
                        <Input placeholder="add user name"></Input>
                      </Form.Item>
                      <Form.Item>
                        <label>
                          User Name <em>*</em>
                        </label>
                        <br />
                        <Input placeholder="add user name"></Input>
                      </Form.Item>
                      <Form.Item>
                        <label>
                          User Name <em>*</em>
                        </label>
                        <br />
                        <Input placeholder="add user name"></Input>
                      </Form.Item>
                      <Form.Item>
                        <label>
                          User Name <em>*</em>
                        </label>
                        <br />
                        <Input placeholder="add user name"></Input>
                      </Form.Item>
                      <Form.Item>
                        <label type="password">
                          User Name <em>*</em>
                        </label>
                        <br />
                        <Input.Password
                          className="input1"
                          placeholder="add user name"
                          style={{
                            borderLeft: "none",
                            borderRight: "none",
                            borderTop: "none",
                          }}
                        ></Input.Password>
                      </Form.Item>
                      <Form.Item>
                        <label>
                          User Name <em>*</em>
                        </label>
                        <br />
                        <TextArea
                          rows={4}
                          placeholder="maxLength is 6"
                          maxLength={6}
                          style={{
                            borderLeft: "none",
                            borderRight: "none",
                            borderTop: "none",
                            resize: "none",
                          }}
                        />
                      </Form.Item>
                      <Form.Item>
                        <label>
                          User Name <em>*</em>
                        </label>
                        <br />
                        <Button
                          className="input1"
                          type="primary"
                          htmlType="submit"
                        >
                          Submit
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="our_offices">
          <div className="our_offices_heading">
            <h1>Our Offices</h1>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <h3>Singapore (HQ)</h3>
                  <p>
                    12 Marina View,
                    <br /> Asia Square Tower 2, #11-01, Singapore - 018961
                    <br /> Tel: +65-98637375
                  </p>
                </div>
                <div className="col-md-4">
                  <h3>Delhi NCR</h3>
                  <p>
                    NSL Techzone, <br /> Sector 144, Noida, Uttar Pradesh -
                    201306, India <br /> Tel: +91 120 4601800
                  </p>
                </div>
                <div className="col-md-4">
                  <h3>New Jersey</h3>
                  <p>
                    101 Hudson Street, <br /> #2100, Jersey City, New Jersey -
                    07302 <br />
                    Tel: +1 (201) 633-2314
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <h3>Sydney</h3>
                  <p>
                    Level 35, International Tower One, <br /> 100 Barangaroo
                    Avenue, NSW - 2000, Sydney <br />
                    Tel: +61 2 81144479
                  </p>
                </div>
                <div className="col-md-4">
                  <h3>Dubai</h3>
                  <p>
                    Sentro Business Center, <br /> 1107, Sheikh Zayed Road,
                    Dubai <br /> Tel: +971 4 3999496
                  </p>
                </div>
                <div className="col-md-4">
                  <h3>Dehradun</h3>
                  <p>
                    Chrysler Tech Centre, <br /> Doon IT Park, Sahastradhara Rd,
                    Dehradun, Uttarakhand - 248001 <br /> Tel: +91 120 4601800
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="write_to_us">
          <div className="email_icon">
            <NavLink to="/" style={{ fontSize: "32px" }}>
              <IoIosMail />
            </NavLink>
          </div>
          <div className="heading" style={{ fontSize: "34px" }}>
            Write to Us
          </div>
          <button type="button" className="btn btn-outline-danger">
            accelgrowth.com
          </button>
        </div>
        <hr />
        <div className="last_section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 subscribe">
                <h2>Subscribe to Our Insights</h2>
                <div className="insite_button">
                  <button type="button" className="btn btn-outline-danger">
                    accelgrowth.com
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <h2>Latest from our blog</h2>
                <h4>Why and how finally block is NOT meaningless</h4>
                <p>
                  A definition first (from the internet): try-catch-finally is
                  used to handle runtime errors and preve...
                </p>
                <button type="button" className="btn btn-outline-danger">
                  accelgrowth.com
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
