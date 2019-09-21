import React from 'react';

const Categories = props => {
    
    return(
        props.loading ? <h1>loading</h1> : (
            <div className="categories">

            </div>        )
    )
}

export default Categories;