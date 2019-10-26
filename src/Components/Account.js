import React from "react";
import { Link } from "react-router-dom";


const Account = () => {

  return (
    <div className="account">
      <div className="managment">
        <form>
          <Link to="/add">
           <input type="button" value="Add New Place" />
          </Link>

          
            <input type="button" value="Edit Existing Place" />

        </form>
      </div>
    
    </div>
  );
};

export default Account;
