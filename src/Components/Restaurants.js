import React, { useState } from "react";

import '../assets/SCSS/Restaurants.scss';

const Restaurants = props => {
    const [count, setCount] = useState([]);

    const id = props.match.params.id;
    const restaurant = props.restaurants.filter(each => each.id.toString() === id)[0];
    const productCategories = props.products.filter(each => each.RestaurantsID === restaurant.id);

    const expand = ev => {
        if(ev.currentTarget.parentNode.className === "product") {
            ev.currentTarget.parentNode.className = "product expanded"
        } else if (ev.currentTarget.parentNode.className === "product expanded"){
            ev.currentTarget.parentNode.className = "product"
        }
    }

    const countHandler = ev => {
        const target = count.filter(each => each.id === ev.currentTarget.id)[0];

        if(!target){
            setCount([
                ...count,
                {id: ev.currentTarget.id, counter: 1}
            ])
        } else if(ev.target.value === "+") {
            setCount([
                ...count,
                {id:ev.currentTarget.id, counter: ++target.counter}
            ])
        } else if(ev.currentTarget.value === "-" && target.counter !== 0 && target.counter !== 1) {
            setCount([
                ...count,
                {id:ev.currentTarget.id, counter: --target.counter}
            ])
        } else if(target.counter === 1){
            const filtered = count.filter(each => each.id !== ev.currentTarget.id)
            setCount(filtered)
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
                                     <div className="product" key={eachProd.id} >
                                         <span>
                                                 <h6>Count: {count.filter(each => each.id === eachProd.id.toString())[0] ? count.filter(each => each.id === eachProd.id.toString())[0].counter : 0} </h6>
                                                 {count.filter(each => each.id === eachProd.id.toString())[0] && count.filter(each => each.id === eachProd.id.toString())[0].counter !== 0 ? 
                                                 <div>
                                                <input type="button" className="button" id={eachProd.id} value="-" onClick={countHandler} /> 
                                                <input type="button" className="button" id={eachProd.id} value="+" onClick={countHandler} /> 
                                                </div> :
                                                <input type="button" className="button" id={eachProd.id} value="Add to order" onClick={countHandler} /> 

                                                }
                                             </span>

                                         <div className="description" onClick={expand}>
                                             <h3>{eachProd.name}</h3>
                                             <h4>{eachProd.description}</h4>
                                             <h5>{eachProd.price}</h5>
                                         </div>

                                         <img src={eachProd.img} alt={eachProd.name}  onClick={expand} />
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