import React from "react";
import { Link } from "react-router-dom";

import "../assets/SCSS/Footer.scss";

import CategoryPng from "../assets/IMG/Icons/Category.png";
import DeliveryPng from "../assets/IMG/Icons/Delivery.png";
import HomePng from "../assets/IMG/Icons/Home.png";
import MePng from "../assets/IMG/Icons/Me.png";
import SearchPng from "../assets/IMG/Icons/Search.png";

const Footer = props => {
  const path = window.location.pathname;
  return (
    <div className="footer">
      <div className="home">
        <Link to="/">
          <img
            src={HomePng}
            alt="Home"
            className={path === "/" ? "selected" : null}
          />
          <h2>Home</h2>
        </Link>
      </div>

      <div className="categories">
        <img
          src={CategoryPng}
          alt="categories"
          className={path === "/categories" ? "selected" : null}
        />
        <h2>Categ.</h2>
      </div>

      <div className="delivery">
        <img
          src={DeliveryPng}
          alt="Delivery"
          className={path === "/delivery" ? "selected" : null}
        />
        <h2>deliv</h2>
      </div>

      <div className="search">
        <img
          src={SearchPng}
          alt="Search"
          className={path === "/search" ? "selected" : null}
        />
        <h2>Search</h2>
      </div>

      <div className="me">
        <img
          src={MePng}
          alt="account"
          className={path === "/account" ? "selected" : null}
        />
        <h2>Me</h2>
      </div>
    </div>
  );
};

export default Footer;
