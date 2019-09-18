import React, { useState } from "react";

import Carousel from "./Custom/Carousel.js";
import Slider from './Custom/Slider.js';

import '../assets/SCSS/Home.scss';

const Home = () => {
  const [images, setImages] = useState([
    "https://picsum.photos/id/757/600/300",
    "https://picsum.photos/id/756/600/300",
    "https://picsum.photos/id/755/600/300",
    "https://picsum.photos/id/758/600/300"
  ]);

  const [catImg, setCatImg] = useState([
    "https://picsum.photos/id/1/600/300",
    "https://picsum.photos/id/2/600/300",
    "https://picsum.photos/id/3/600/300", 
    "https://picsum.photos/id/4/600/300"
  ]);

  const [recImg, setRecImg] = useState([
    "https://picsum.photos/id/5/600/300",
    "https://picsum.photos/id/6/600/300",
    "https://picsum.photos/id/7/600/300", 
    "https://picsum.photos/id/8/600/300"
  ]);

  return (
    <div className="home">
      <div className='headerCarousel'>
        <Carousel images={images} />
      </div>

      <h1>Categories</h1>

    <div className="catSlider">
      <Slider images={catImg} />
    </div>

    <h1>Recomended</h1>
    <div className="recomended">
      <Slider images={recImg} />
    </div>

    <h1>Random</h1>
    <div className="recomended">
      <Slider images={recImg} />
    </div>

    </div>
  );
};

export default Home;
