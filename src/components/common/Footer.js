import React from "react";
import { NavLink } from "react-router-dom";
import { BackTop } from "antd";

const AppFooter = () => {
  return (
    <div className="Fcontainer-fluid" style={{ backgroundColor: "#f8f6f4np" }}>
      <div className="footer">
        <div className="footer_columns">
          <div className="footer_heading">
            <h6>Who We Are</h6>
          </div>
          <div className="footer_list">
            <ul className="footer_unorder_list" style={{ listStyle: "none" }}>
              <li>
                <NavLink to="/">About</NavLink>
              </li>
              <li>
                <NavLink to="/">Leadership</NavLink>
              </li>
              <li>
                <NavLink to="/">Partners</NavLink>
              </li>
              <li>
                <NavLink to="/">Careers</NavLink>
              </li>
              <li>
                <NavLink to="/">Services</NavLink>
              </li>
              <li>
                <NavLink to="/">Features</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_columns">
          <div className="footer_heading">
            <h6>Who We Are</h6>
          </div>
          <div className="footer_list">
            <ul className="footer_unorder_list" style={{ listStyle: "none" }}>
              <li>
                <NavLink to="/">About</NavLink>
              </li>
              <li>
                <NavLink to="/">Leadership</NavLink>
              </li>
              <li>
                <NavLink to="/">Partners</NavLink>
              </li>
              <li>
                <NavLink to="/">Careers</NavLink>
              </li>
              <li>
                <NavLink to="/">Services</NavLink>
              </li>
              <li>
                <NavLink to="/">Features</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_columns">
          <div className="footer_heading">
            <h6>Who We Are</h6>
          </div>
          <div className="footer_list">
            <ul className="footer_unorder_list" style={{ listStyle: "none" }}>
              <li>
                <NavLink to="/">About</NavLink>
              </li>
              <li>
                <NavLink to="/">Leadership</NavLink>
              </li>
              <li>
                <NavLink to="/">Partners</NavLink>
              </li>
              <li>
                <NavLink to="/">Careers</NavLink>
              </li>
              <li>
                <NavLink to="/">Services</NavLink>
              </li>
              <li>
                <NavLink to="/">Features</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_columns">
          <div className="footer_heading">
            <h6>Who We Are</h6>
          </div>
          <div className="footer_list">
            <ul className="footer_unorder_list" style={{ listStyle: "none" }}>
              <li>
                <NavLink to="/">About</NavLink>
              </li>
              <li>
                <NavLink to="/">Leadership</NavLink>
              </li>
              <li>
                <NavLink to="/">Partners</NavLink>
              </li>
              <li>
                <NavLink to="/">Careers</NavLink>
              </li>
              <li>
                <NavLink to="/">Services</NavLink>
              </li>
              <li>
                <NavLink to="/">Features</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_social_connection">
          <div className="logo">
            <i className="fas fa-bolt"></i>
            <a href="https://google.com">React Antd</a>
          </div>
          <ul className="socials">
            <li>
              <a href="https://facebook.com">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
          <div className="copyright">
            Copyright &copy; {new Date().getFullYear()} React Antd
          </div>
          <BackTop>
            <div className="goTop">
              <i className="fas fa-arrow-circle-up"></i>
            </div>
          </BackTop>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
