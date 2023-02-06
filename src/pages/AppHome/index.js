import React from "react";
import HomeHeader from "../../components/HomePages/homeHeader/index";
import HomeOffering from "../../components/HomePages/HomeOffering/index";
import HomeMission from "../../components/HomePages/HomeMission/index";
import HomeAbout from "../../components/HomePages/HomeAbout/index";
import HomeServices from "../../components/HomePages/HomeServices/index";
import HomeTechnologies from "../../components/HomePages/HomeTechnologies/index";
import HomeFollow from "../../components/HomePages/HomeFollow/index";
import HomePartner from "../../components/HomePages/HomePartner/index";
import HomeProduct from "../../components/HomePages/HomeProduct/index";
import HomeContact from "../../components/HomePages/HomeContact/index";
import HomeContactblock from "../../components/HomePages/HomeContactblock/index";
import HomeMarqee from "../../components/HomePages/HomeMarqee/index";
// import Homecontact from "../Homepages/Homecontact/Homecontact";
// import Homecontactblock from "../Homepages/Homecontactblock/Homecontactblock";
// import { Button, Carousel } from 'antd';

const AppHome = () => {
  return (
    <>
      <HomeHeader />
      <HomeOffering />
      <HomeMission />
      <HomeAbout />
      <HomeServices />
      <HomeTechnologies />
      <HomeFollow />
      <HomePartner />
      <HomeProduct />
      <HomeContact />
      <HomeContactblock />
      <HomeMarqee />
    </>
  );
};

export default AppHome;
