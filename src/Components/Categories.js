import React from 'react';

import '../assets/SCSS/Categories.scss';

const Categories = props => {
    
    return(
        props.loading ? <h1>loading</h1> : (
            <div className="categoriesSection">
                {props.categories.map(each => {
                    return(
                        <div>
                        <img src={each.img} key={each.id} alt="category" />
                        <h1>{each.category}</h1>
                        </div>
                    )
                })}
            </div>
        )
    )
}

export default Categories;