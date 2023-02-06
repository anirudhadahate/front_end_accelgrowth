import React from "react";
// import Footer from "../../components/footer";
// import Header from "../../components/header";

import { Layout } from "antd";
// import AppHeader from "../../components/common/Header";
// import AppFooter from "../../components/common/Footer";
import AppHome from "../AppHome";
const { Content } = Layout;
const Home = () => {
  return (
    <Layout className="mainLayout">
      <Content>
        <AppHome />
      </Content>
    </Layout>
  );
};
export default Home;
