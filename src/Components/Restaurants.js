import React from "react";

import '../assets/SCSS/Restaurants.scss';

const Restaurants = props => {
    const id = props.match.params.id;

    const restaurant = props.restaurants.filter(each => each.id.toString() === id)[0];
    const productCategories = props.products.filter(each => each.RestaurantsID === restaurant.id);

    const expand = ev => {
        if(ev.currentTarget.className === "product") {
            ev.currentTarget.className = "product expanded"
        } else if (ev.currentTarget.className === "product expanded"){
            ev.currentTarget.className = "product"
        }
    }

    return (
        <div className="restaurant">
            <div className="restaurantHeader">
                <img src={restaurant.img} alt={restaurant.restaurant} />
                <h5>{restaurant.restaurant}</h5>
            </div>
            

            <div className="products">
                {productCategories.map(eachProdCat => {
                    return(
                        <div className="productCategory" key={eachProdCat.id}>
                            <h2>{eachProdCat.name}</h2>

                            {eachProdCat.products.map(eachProd => {
                                return(
                                     <div className="product" key={eachProd.id} onClick={expand}>
                                         <div className="description">
                                             <h3>{eachProd.name}</h3>
                                             <h4>{eachProd.description}</h4>
                                             <h5>{eachProd.price}</h5>
                                             <span>
                                                 <h6>Count:</h6>
                                                <input type="button" class="button" value="Add to order" /> 
                                             </span>
                                         </div>

                                         <img src={eachProd.img} alt={eachProd.name} />
                                     </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Restaurants;