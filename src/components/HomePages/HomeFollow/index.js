import React from "react";
import "./Style/index.css";
import follow1 from "../../../assets/images/img4.jpg";

function Follow() {
  return (
    <>
      <div className="follow_card">
        <h3>How It Work</h3>
        <p>
          What We
          <span style={{ color: "red", fontStyle: "italic" }}> Follow</span>
        </p>

        <hr />

        <div className="follow_list">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <img
                  style={{
                    height: "100px",
                    width: "100px",
                    "border-radius": "100%",
                  }}
                  src={follow1}
                  alt=""
                />
                <h4>Request a Meeting</h4>
                <p>Expert will take look and will choose services</p>
              </div>
              <div className="col-md-2">
                <img
                  style={{
                    height: "100px",
                    width: "100px",
                    "border-radius": "100%",
                  }}
                  src={follow1}
                  alt=""
                />
                <h4>Choose a Service with Experts</h4>
                <p>Expert will take look and will choose services</p>
              </div>
              <div className="col-md-2">
                <img
                  style={{
                    height: "100px",
                    width: "100px",
                    "border-radius": "100%",
                  }}
                  src={follow1}
                  alt=""
                />
                <h4>Receive Custom Plan</h4>
                <p>Expert will take look and will choose services</p>
              </div>
              <div className="col-md-2">
                <img
                  style={{
                    height: "100px",
                    width: "100px",
                    "border-radius": "100%",
                  }}
                  src={follow1}
                  alt=""
                />
                <h4>Let's Make It Happen</h4>
                <p>Expert will take look and will choose services</p>
              </div>
              <div className="col-md-2">
                <img
                  style={{
                    height: "100px",
                    width: "100px",
                    "border-radius": "100%",
                  }}
                  src={follow1}
                  alt=""
                />
                <h4>Provide Support for Long Term</h4>
                <p>Expert will take look and will choose services</p>
              </div>
              <div className="col-md-2">
                <img
                  style={{
                    height: "100px",
                    width: "100px",
                    "border-radius": "100%",
                  }}
                  src={follow1}
                  alt=""
                />
                <h4>Choose a Service with Experts</h4>
                <p>Expert will take look and will choose services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Follow;
