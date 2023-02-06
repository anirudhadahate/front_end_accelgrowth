import React from "react";
import "./Style/index.css";
import company from "../../../assets/images/bar-chart.png";
import address from "../../../assets/images/location.png";
import mail from "../../../assets/images/mail.png";

const ContcatBlock = () => {
  return (
    <>
      <div className="block_container">
        <div className="ContcatBlock">
          <div className="company">
            <img src={company} alt="" />
            <h3>Company</h3>
            <p>Accelgrowth (Pty) Ltd CHALLENGING THE ODDS</p>
          </div>
          <div className="company">
            <img src={address} alt="" />
            <h3>Address</h3>
            <p>Accelgrowth (Pty) Ltd CHALLENGING THE ODDS</p>
          </div>
          <div className="company">
            <img src={mail} alt="" />
            <h3>Send Mail</h3>
            <p>Accelgrowth (Pty) Ltd CHALLENGING THE ODDS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContcatBlock;
