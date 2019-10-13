import React, { useState } from "react";

import "../../assets/SCSS/Carousel.scss";

const Carousel = props => {
  const [el, setEl] = useState({});
  const [global, setGlobal] = useState({
    touchstartx: undefined,
    touchmovex: undefined,
    movex: undefined,
    index: 0
  });

  const tchStart = ev => {
    setEl({
      holder: ev.currentTarget,
      imgSlide: ev.target
    });

    setGlobal({
      ...global,
      touchstartx: ev.touches[0].pageX,
      holderWidth: ev.currentTarget.offsetWidth,
      touchmovex: ev.touches[0].pageX
    });
  };

  const tchMove = ev => {
    setGlobal({
      ...global,
      touchmovex: ev.touches[0].pageX
    });

    el.holder.style = `transform: translateX(${-global.index * global.holderWidth +
      (global.touchmovex - global.touchstartx)}px)`;
  };

  const tchEnd = ev => {
    if (
      global.touchstartx > global.holderWidth / 2 &&
      global.touchmovex < global.holderWidth / 2 &&
      global.index !== props.images.length - 1
    ) {
      setGlobal({
        ...global,
        index: ++global.index
      });
    }

    if (
      global.touchstartx < global.holderWidth / 2 &&
      global.touchmovex > global.holderWidth / 2 &&
      global.index !== 0
    ) {
      setGlobal({
        ...global,
        index: --global.index
      });
    }

    el.holder.style = `transform: translateX(${-global.index *
      global.holderWidth}px);`;
  };

  return (
    <div className="slideshow">
      <div
        className="holder"
        onTouchStart={tchStart}
        onTouchMove={tchMove}
        onTouchEnd={tchEnd}
      >
        {props.images.map((each, index) => {
          return (
            <img src={each} key={index} alt="slideshow" className="imgSlide" />
          );
        })}
      </div>

      <div className="dotsContainer">
        {props.images.map((each, index) => {
          const cls = index === global.index ? "dot active" : "dot";

          return <span className={cls} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Carousel;
