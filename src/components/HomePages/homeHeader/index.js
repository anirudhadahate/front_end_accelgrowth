import React from "react";
import "./style/index.css";
import { Carousel } from "react-responsive-carousel";
import career_carousel from "../../../../src/images/careerbg3.jpg";
import career_carousel_1 from "../../../../src/images/career101.jpg";

const Header = () => {
  return (
    <>
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
    </>
  );
};

export default Header;
