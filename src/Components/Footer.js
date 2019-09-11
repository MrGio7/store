import React from 'react';

import '../assets/SCSS/Footer.scss';

import CategoryPng from '../assets/IMG/Icons/Category.png';
import DeliveryPng from '../assets/IMG/Icons/Delivery.png';
import HomePng from '../assets/IMG/Icons/Home.png';
import MePng from '../assets/IMG/Icons/Me.png';
import SearchPng from '../assets/IMG/Icons/Search.png';


const Footer = () => {
    return (
        <div className="footer">
        <div className='home'>
        <img src={HomePng} alt="Home" />
          <h2>Home</h2>
        </div>

        <div className="categories">
            <img src={CategoryPng} alt="categories" />
          <h2>Categ.</h2>
        </div>

        <div className="delivery">
        <img src={DeliveryPng} alt="Delivery" />
          <h2>deliv</h2>
        </div>

        
        <div className="search">
        <img src={SearchPng} alt="Search" />
          <h2>Search</h2>
        </div>

        <div className="me">
        <img src={MePng} alt="account" />
          <h2>Me</h2>
        </div>
      </div>
    )
}

export default Footer;