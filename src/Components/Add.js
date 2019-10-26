import React from 'react';

import '../assets/SCSS/Add.scss';

const Add = () => {

    return(
        <div className="add">
            <h1>Add New Place</h1>

            <form>
                <input type="text" placeholder="name" />
                <input type="text" placeholder="image address" />
                <input type="select" placeholder="category" />
                <input type="button" className="btn" value="Submit" />
            </form>
        </div>
    )
};

export default Add;