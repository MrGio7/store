import React, { useState } from 'react';

import '../assets/SCSS/Add.scss';

const Add = props => {
    const [btnName, setBtnName] = useState("Select Category");

    const selectCategory = ev => {
        ev.preventDefault();
        setBtnName(ev.target.id);
        ev.currentTarget.parentElement.style.display = "none";
    };

    const catBtn = () => {
        const dropDown = document.getElementsByClassName("myDropdown")[0];
        
        if(dropDown.style.display === 'none'){
            dropDown.style.display = 'block';
        } else if(dropDown.style.display === 'block'){
            dropDown.style.display = 'none';
        }
    }

    return(
        <div className="add">
            <h1>Add New Place</h1>

            <form>
                <input type="text" placeholder="name" />

                <input type="text" placeholder="image address" />

                <input type="button" value={btnName} className="dropbtn" onClick={catBtn} />
                <div className="myDropdown" style={{display: "none"}}>
                    <input type="text" placeholder="Search..." id="searchCat" />
                    {props.categories.map(each => {
                        return(
                            <h2 key={each.id} id={each.category} onClick={selectCategory}>{each.category}</h2>
                        )
                    })}
                </div>
                
                <input type="button" className="btn" value="Submit" />
            </form>
        </div>
    )
};

export default Add;