import React, { useState } from "react";

import "../../assets/SCSS/Carousel.scss";

const Carousel = props => {
  const [images, setImages] = useState([
    "https://picsum.photos/id/757/600/300",
    "https://picsum.photos/id/756/600/300",
    "https://picsum.photos/id/755/600/300",
    "https://picsum.photos/id/758/600/300"
  ]);

  const [slideIndex, setSlideIndex] = useState(0);

  const plusSlide = () => {
    if (slideIndex !== images.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(0);
    }
  };

  const minusSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(images.length - 1);
    }
  };

  let slideShow = n => {
    return images.map((each, index) => {
      let cls = index === slideIndex ? "slide" : "none";

      return (
        <div className={cls} key={index}>
          <img src={each} alt="slideshow" />
        </div>
      );
    });
  };

  return (
    <div className="slideshow">
      {slideShow()}
      <div className="btns">
        <div className="prev" onClick={minusSlide}>
          &#10094;
        </div>
        <div className="next" onClick={plusSlide}>
          &#10095;
        </div>
      </div>
    </div>
  );
};

export default Carousel;
