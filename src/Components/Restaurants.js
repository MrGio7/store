import React from "react";

const Restaurants = props => {
    const id = props.match.params.id;

    const restaurant = props.restaurants.filter(each => each.id.toString() === id)[0];

    return (
        <div className="restaurant">
            <img src={restaurant.img} alt={restaurant.restaurant} />
            <h5>{restaurant.restaurant}</h5>

        </div>
    )
}

export default Restaurants;