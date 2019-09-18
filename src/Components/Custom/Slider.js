import React, { useState } from "react";

import "../../assets/SCSS/Slider.scss";

const Slider = props => {

  const [el, setEl] = useState({});
  const [global, setGlobal] = useState({
    touchstartx: undefined,
    touchmovex: undefined,
    movex: 0
  });

  const tchStart = ev => {
    setEl({
      holder: ev.currentTarget,
      imgSlide: ev.target
    });

    setGlobal({
      ...global,
      touchstartx: ev.touches[0].pageX - global.movex,
      holderWidth: ev.currentTarget.offsetWidth,
      touchmovex: ev.touches[0].pageX
    });
  };

  const tchMove = ev => {
    setGlobal({
      ...global,
      touchmovex: ev.touches[0].pageX,
      movex: global.touchmovex - global.touchstartx
    });

    el.holder.style = `transform: translateX(${1.5*(global.touchmovex -
      global.touchstartx)}px)`;
  };

  const tchEnd = ev => {
    if (-global.holderWidth > global.movex) {
      setGlobal({
        ...global,
        movex: -global.holderWidth
      });
      el.holder.style = `transform: translateX(${-global.holderWidth}px)`;
    } else if (global.movex >= 0) {
      setGlobal({
        ...global,
        movex: 0
      });
      el.holder.style = `transform: translateX(0px)`;
    } else {
      el.holder.style = `transform: translateX(${global.movex}px)`;
    }
  };

  return (
    <div className="slider">
      <div
        className="holder"
        onTouchStart={tchStart}
        onTouchMove={tchMove}
        onTouchEnd={tchEnd}
      >
        {props.images.map((each, index) => {
          return (
            <img src={each} key={index} alt="slider" className="imgSlide" />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
