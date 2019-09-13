import React, { useState } from "react";

import "../../assets/SCSS/Carousel.scss";

const Carousel = props => {
  const [images, setImages] = useState([
    "https://picsum.photos/id/757/600/300",
    "https://picsum.photos/id/756/600/300",
    "https://picsum.photos/id/755/600/300",
    "https://picsum.photos/id/754/600/300"
  ]);

  return (
    <div className="slideshow">
      <div className="images">
        {images.map((each, index) => {
          return <img src={each} />;
        })}

        <div className="btns">
          <a className="prev">&#10094;</a>
          <a className="next">&#10095;</a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
