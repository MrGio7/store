import React, { useState } from "react";

import Carousel from "./Custom/Carousel.js";
import Slider from './Custom/Slider.js';

import '../assets/SCSS/Home.scss';

const Home = props => {
  const [images, setImages] = useState([
    "https://picsum.photos/id/757/600/300",
    "https://picsum.photos/id/756/600/300",
    "https://picsum.photos/id/755/600/300",
    "https://picsum.photos/id/758/600/300"
  ]);

  console.log(props);

  return (
    <div className="home">
      <div className='headerCarousel'>
        <Carousel images={images} />
      </div>

      <h1>Categories</h1>

    <div className="catSlider">
      <Slider images={props.categories} />
    </div>

    <h1>Restaurants</h1>
    <div className="resSlider">
      <Slider images={props.restaurants} />
    </div>

    <h1>Random</h1>
    <div className="recomended">
      <Slider images={props.restaurants} />
    </div>

    </div>
  );
};

export default Home;
