import React from "react";
import { Link } from "react-router-dom";

import "../assets/SCSS/Footer.scss";

import CategoryPng from "../assets/IMG/Icons/Category.png";
import DeliveryPng from "../assets/IMG/Icons/Delivery.png";
import HomePng from "../assets/IMG/Icons/Home.png";
import MePng from "../assets/IMG/Icons/Me.png";
import SearchPng from "../assets/IMG/Icons/Search.png";

const Footer = () => {

  return (
    <div className="footer">
      <Link to="/home">
        <div>
          <img
            src={HomePng}
            alt="Home"
            className={window.location.hash === "#/home" ? "selected" : null}
          />
          <h2>Home</h2>
        </div>
      </Link>

      <Link to="/categories">
      <div className="categories">
        <img
          src={CategoryPng}
          alt="categories"
          className={window.location.hash === "#/categories" ? "selected" : null}
        />
        <h2>Categ.</h2>
      </div>
      </Link>

      <div className="delivery">
        <img
          src={DeliveryPng}
          alt="Delivery"
          className={window.location.hash === "#/delivery" ? "selected" : null}
        />
        <h2>deliv</h2>
      </div>

      <div className="search">
        <img
          src={SearchPng}
          alt="Search"
          className={window.location.hash === "#/search" ? "selected" : null}
        />
        <h2>Search</h2>
      </div>

      <Link to="/account">
        <div className="me">
          <img
            src={MePng}
            alt="account"
            className={window.location.hash === "#/account" ? "selected" : null}
          />
          <h2>Me</h2>
        </div>
      </Link>
    </div>
  );
};

export default Footer;
