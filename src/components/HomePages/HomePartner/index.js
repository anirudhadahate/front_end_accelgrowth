import React from "react";
import './Style/index.css';
import img1 from "../../../assets/images/docker.png";
function Parterner() {
  return (
    <div className="partner">
      <h4>Our Parteners</h4>
      <br />
      <h2>Valueable Partners</h2>
      <hr />
      <br />
      <p>
        We apply a long-term approach to all our partnerships and engagements.
        This ensures our solutions remain as valuable to our clients years after
        their implementation as they were on the day they were completed.
      </p>

      <div className="partner-logo">
        <div className="grid-item">
          <img src={img1} alt="" />
        </div>
        <div className="grid-item">
          <img src={img1} alt="" />
        </div>
        <div className="grid-item">
          <img src={img1} alt="" />
        </div>
        <div className="grid-item">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="partner-logo">
        <div className="grid-item">
          <img src={img1} alt="" />
        </div>
        <div className="grid-item">
          <img src={img1} alt="" />
        </div>
        <div className="grid-item">
          <img src={img1} alt="" />
        </div>
        <div className="grid-item">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Parterner;

