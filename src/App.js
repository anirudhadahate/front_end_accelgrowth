// import logo from './logo.svg';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Layout } from 'antd';
// import AppHeader from "./components/common/header";
// import AppFooter from "./components/common/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import FAQ from "./pages/FAQ";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";
import Career from "./pages/Career";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Services from "./pages/Services";
import GetResume from "./pages/GetResume/index";
import CloudDevops from "./pages/CloudDevops";
import "antd/dist/antd.min.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/About" exact element={<About />} />
        <Route path="/Features" exact element={<Features />} />
        <Route path="/HowItWorks" exact element={<HowItWorks />} />
        <Route path="/FAQ" exact element={<FAQ />} />
        <Route path="/Pricing" exact element={<Pricing />} />
        <Route path="/ContactUs" exact element={<ContactUs />} />
        <Route path="/Career" exact element={<Career />} />
        <Route path="/Registration" exact element={<Registration />} />
        <Route path="/Login" exact element={<Login />} />
        <Route path="/Services" exact element={<Services />} />
        <Route path="/GetResume" exact element={<GetResume />} />
        <Route path="/CloudDevops" exact element={<CloudDevops />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
