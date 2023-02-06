import React from "react";
import "./Style/index.css";
import js from "../../../assets/images/js.png";
import html from "../../../assets/images/html-5.png";
import python from "../../../assets/images/python.png";
import oracle from "../../../assets/images/oracle.png";
import docker from "../../../assets/images/docker.png";
const Marqee = () => {
  return (
    <>
      <div>
        <marquee behavior="" direction="rtl" className="tech_list">
          <img src={js} alt="" />
          <img src={html} alt="" />
          <img src={python} alt="" />
          <img src={oracle} alt="" />
          <img src={docker} alt="" />
        </marquee>
      </div>
    </>
  );
};

export default Marqee;
