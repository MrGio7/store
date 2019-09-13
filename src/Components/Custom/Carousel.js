import React, { useState } from "react";

import '../../assets/SCSS/Carousel.scss';

const Carousel = props => {
  const [images, setImages] = useState([
    "https://picsum.photos/id/757/600/300",
    "https://picsum.photos/id/756/600/300",
    "https://picsum.photos/id/755/600/300",
    "https://picsum.photos/id/754/600/300"
  ]);

  return (
    <div className="slideshow">
      {images.map((each, index) => {
        return <img src={each} />;
      })}
    </div>
  );
};

export default Carousel;
