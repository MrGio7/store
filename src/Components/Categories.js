import React from 'react';
import { Link } from "react-router-dom";

import '../assets/SCSS/Categories.scss';

const Categories = props => {
    
    return(
        props.loading ? <h1>loading</h1> : (
            <div className="categoriesSection">
                {props.categories.map(each => {
                    return(
                        <div className="category" key = {each.id}>
                            <Link to={`/categories/${each.id}`}>
                                <img className="catImg" src={each.img} key={each.id} alt="category" />
                                <h1>{each.category}</h1>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    )
}

export default Categories;