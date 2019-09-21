import React from "react";
import { Link } from "react-router-dom";

import "../assets/SCSS/Footer.scss";

import CategoryPng from "../assets/IMG/Icons/Category.png";
import DeliveryPng from "../assets/IMG/Icons/Delivery.png";
import HomePng from "../assets/IMG/Icons/Home.png";
import MePng from "../assets/IMG/Icons/Me.png";
import SearchPng from "../assets/IMG/Icons/Search.png";

const Footer = props => {
  const path = window.location;

  const choose = ev => {
    const target = ev.currentTarget.hash;
    
    const link = document.getElementsByClassName(`${target}`)[0];

    document.getElementsByClassName(`#/home`)[0].className=`#/home`;
    document.getElementsByClassName(`#/categories`)[0].className=`#/categories`;
    document.getElementsByClassName(`#/search`)[0].className=`#/search`;
    document.getElementsByClassName(`#/account`)[0].className=`#/account`;
    document.getElementsByClassName(`#/delivery`)[0].className=`#/delivery`;

    link.className=`${target} selected`;
  };

  return (
    <div className="footer">
      <Link to="/home" onClick={choose}>
        <div>
          <img
            src={HomePng}
            alt="Home"
            className="#/home selected"
          />
          <h2>Home</h2>
        </div>
      </Link>

      <Link to="/categories" onClick={choose}>
      <div className="categories">
        <img
          src={CategoryPng}
          alt="categories"
          className="#/categories"
        />
        <h2>Categ.</h2>
      </div>
      </Link>

      <div className="delivery">
        <img
          src={DeliveryPng}
          alt="Delivery"
          className="#/delivery"
        />
        <h2>deliv</h2>
      </div>

      <div className="search">
        <img
          src={SearchPng}
          alt="Search"
          className="#/search"
        />
        <h2>Search</h2>
      </div>

      <Link to="/account" onClick={choose}>
        <div className="me">
          <img
            src={MePng}
            alt="account"
            className="#/account"
          />
          <h2>Me</h2>
        </div>
      </Link>
    </div>
  );
};

export default Footer;
