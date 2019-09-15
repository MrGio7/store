import React, { useState, useEffect } from "react";

import "../../assets/SCSS/Carousel.scss";

const Carousel = props => {
  const [images, setImages] = useState([
    "https://picsum.photos/id/757/600/300",
    "https://picsum.photos/id/756/600/300",
    "https://picsum.photos/id/755/600/300",
    "https://picsum.photos/id/758/600/300"
  ]);

  const [slideIndex, setSlideIndex] = useState(0);

  const [el, setEl] = useState({});
  const [global, setGlobal] = useState({
    touchstartx: undefined,
    touchmovex: undefined,
    movex: undefined,
    index: 0
  });

  useEffect(() => {
    setEl({
      slider: document.getElementsByClassName("slideshow"),
      holder: document.getElementsByClassName("holder"),
      imgSlide: document.getElementsByClassName("imgSlide"),
      slideWidth: document.getElementsByClassName("slideshow")[0].offsetWidth
    });
  }, []);

  // const plusSlide = () => {
  //   if (slideIndex !== images.length - 1) {
  //     setSlideIndex(slideIndex + 1);
  //   } else {
  //     setSlideIndex(0);
  //   }
  // };

  // const minusSlide = () => {
  //   if (slideIndex !== 0) {
  //     setSlideIndex(slideIndex - 1);
  //   } else {
  //     setSlideIndex(images.length - 1);
  //   }
  // };

  const tchStart = ev => {
    setGlobal({
      ...global,
      touchstartx: ev.touches[0].pageX,
      holderWidth: el.holder[0].clientWidth,
      touchmovex: ev.touches[0].pageX
    });
  };

  const tchMove = ev => {
    setGlobal({
      ...global,
      touchmovex: ev.touches[0].pageX
    });

    el.holder[0].style = `transform: translate3d(${-global.index * el.slideWidth + (global.touchmovex -
      global.touchstartx)}px,0,0)`;
  };

  const tchEnd = ev => {
    if (
      global.touchstartx > el.slideWidth / 2 &&
      global.touchmovex < el.slideWidth / 2 &&
      global.index !== images.length - 1
    ) {
      setGlobal({
        ...global,
        index: ++global.index
      });
    }

    if (
      global.touchstartx < el.slideWidth / 2 &&
      global.touchmovex > el.slideWidth / 2 &&
      global.index !== 0
    ) {
      setGlobal({
        ...global,
        index: --global.index
      });
    }

    el.holder[0].style = `transform: translate3d(${-global.index * el.slideWidth}px,0,0); 
    transition: transform 0.3s ease-out;`;
  };

  return (
    <div className="slideshow">
      <div
        className="holder"
        onTouchStart={tchStart}
        onTouchMove={tchMove}
        onTouchEnd={tchEnd}
      >
        {images.map((each, index) => {
          return (
            <img src={each} key={index} alt="slideshow" className="imgSlide" />
          );
        })}
        {/* <div className="btns">
          <div className="prev" onClick={minusSlide}>
            &#10094;
          </div>
          <div className="next" onClick={plusSlide}>
            &#10095;
          </div>
        </div> */}
      </div>

      <div className="dotsContainer">
          {images.map((each, index) => {
            const cls = index === global.index ? "dot active" : "dot";

            return(
            <span className={cls} key={index}  />
          )})}
        </div>
    </div>
  );
};

export default Carousel;
