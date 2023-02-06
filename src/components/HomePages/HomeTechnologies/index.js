import React from "react";
import './Style/index.css';
import icon from '../../../assets/images/icon.png';
function Technologies() {
  return (
    <div className="technologies">
     <p style={{fontSize:"2rem"}}>Our Expertises</p>
     <h2>Our Technologies</h2>
     <p>We work on various technologies. Partner with us for end-to-end digital solutions that optimize your business operations.</p>
      <br />
      <hr />
      <div className="techgrid">
      <div className="tech_card">
        <div className="card">
            <img src={icon} alt="" />
        </div>
        <h4>Software Developement</h4>
      </div>
      <div className="tech_card">
        <div className="card">
            <img src={icon} alt="" />
        </div>
        <h4>Could Services</h4>
      </div>
      <div className="tech_card">
        <div className="card">
            <img src={icon} alt="" />
        </div>
        <h4>BI & Data Analytics</h4>
      </div>
      <div className="tech_card">
        <div className="card">
            <img src={icon} alt="" />
        </div>
        <h4>UI/UX Design</h4>
      </div>
      <div className="tech_card">
        <div className="card">
            <img src={icon} alt="" />
        </div>
        <h4>Artificail Intelligence</h4>
      </div>
      <div className="tech_card">
        <div className="card">
            <img src={icon} alt="" />
        </div>
        <h4>Big Data</h4>
      </div>
      <div className="tech_card">
        <div className="card">
            <img src={icon} alt="" />
        </div>
        <h4>Mobile App Developement</h4>
      </div>
      <div className="tech_card">
        <div className="card">
            <img src={icon} alt="" />
        </div>
        <h4>Software Testing</h4>
      </div>
      </div>
    </div>
  );
}

export default Technologies;
