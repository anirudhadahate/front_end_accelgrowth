import React from "react";
import "./Style/index.css";
import icon from "../../../assets/images/icon.png";

const Offering = () => {
  return (
    <div className="parallax-img">
      <div className="offering">
        <div className="offering_card">
          <img src={icon} alt="" />
          <h2>Digital</h2>
          <span>Design New Digital Experience</span>
        </div>
        <div className="offering_card">
          <img src={icon} alt="" />
          <h2>Engineer</h2>
          <span>Engineer Better Digital Products</span>
        </div>
        <div className="offering_card">
          <img src={icon} alt="" />
          <h2>Products</h2>
          <span>Build Digital Service Platforms</span>
        </div>
        <div className="offering_card">
          <img src={icon} alt="" />
          <h2>Revenue</h2>
          <span>Create New Revenue Streams</span>
        </div>
        <div className="offering_card">
          <img src={icon} alt="" />
          <h2>Scale</h2>
          <span>Scale Developement Teams</span>
        </div>
        <div className="offering_card">
          <img src={icon} alt="" />
          <h2>Technology</h2>
          <span>Data Management</span>
        </div>
      </div>
    </div>
  );
};

export default Offering;
