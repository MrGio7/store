import React from "react";
import { Link } from "react-router-dom";

import "../../assets/SCSS/Slider.scss";

const Slider = props => {
  console.log(props.images)

  return (
    <div className="slider">
      {props.images.map(each => {

        if (each.category) {
          return (
            <div className="slide" key={each.id}>
              <Link to={`/categories/${each.id}`} >
              <img
                src={each.img}
                alt="slider"
                id={each.id}
                className="imgSlide"
              />
              <h5>{each.category}</h5>
              </Link>
            </div>
          );

        } else if (each.restaurant) {
          return (
            <div className="slide" key={each.id}>
              <Link to={`/restaurants/${each.id}`} >
              <img
                src={each.img}
                alt="slider"
                id={each.id}
                className="imgSlide"
              />
              <h5>{each.restaurant}</h5>
              </Link>
            </div>
          );

        } else {
          return(
            <h1>Undefined</h1>
          )
        }
      })}
    </div>
  );
};

export default Slider;
