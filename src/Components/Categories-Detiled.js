import React from "react";

const CategoriesDetiled = props => {
    const id = props.match.params.id;

    const restaurants = props.categories.filter(each => each.id.toString() === id)[0].restaurants;

    return (
        <div className="detiledCategories">
            {restaurants.map((each, index) => {
                return (
                    <div className="restaurant" key={index}>
                        <img src={each.img} alt={each.restaurants} />
                        <h3>{each.restaurants}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default CategoriesDetiled;