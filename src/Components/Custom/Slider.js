import React from "react";

import "../../assets/SCSS/Slider.scss";

const Slider = props => {

  return (
    <div className="slider">
      <div className="holder">
        {props.images.map(each => {
          return (
            <img src={each.img} key={each.id} alt="slider" className="imgSlide" />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
