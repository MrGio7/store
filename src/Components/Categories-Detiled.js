import React from "react";
import { Link } from 'react-router-dom';

const CategoriesDetiled = props => {
    const id = props.match.params.id;

    const restaurants = props.categories.filter(each => each.id.toString() === id)[0].restaurants;
    console.log(restaurants)

    return (
        <div className="detiledCategories">
            {restaurants.map((each, index) => {
                return (
                    <div className="restaurants" key={index}>
                        <Link to={`/restaurants/${each.id}`}>
                            <img src={each.img} alt={each.restaurants} />
                            <h3>{each.restaurants}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default CategoriesDetiled;