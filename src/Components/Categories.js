import React from 'react';

const Categories = props => {
    
    return(
        props.loading ? <h1>loading</h1> : (
            <div className="categories">
                {props.Categories.map(each => {
                    return(
                        <img src={each.img} alt="category" />
                    )
                })}
            </div>
        )
    )
}

export default Categories;