import React from "react";
import "./homescreen.css";
import Order from '../Order/index.js';
import SearchFoodItems from '../Order/index.js';

const name = localStorage.getItem("name");

function StudentHome(props) {
  const handleLogout = () => {
    props.setLoggedIn(false);
  };

  return (
    <div>
      <div className="container">
        <h1 className="home-Title">UniScran</h1>
        <div className="button-container">
          <button className="button" onClick={() => console.log("Place order clicked")}>
            Track order
          </button>
          <button className="button" onClick={() => console.log("Track order clicked")}>
            Order history
          </button>
          <button className="button" onClick={() => console.log("Manage account clicked")}>
            Manage account
          </button>
        </div>
        <h3 className="hey-msg">Hey {name}, Wanna order some SCRAN?</h3>
        <h1 className="home-action">Restaurants:</h1>
        {/* Spar Shop UI */}
       <div className="shop">
          <div className="shop-content">
            <h1>Spar Shop (On-Campus)</h1>
            <p>The spar shop is great for some quik items that you need, even alcohol</p>
          </div>
          <button className="shopbutton"> 
            View Menu 
            </button>
        </div>
          {/* The Pantry UI */}
       <div className="shop">
          <div class="shop-content">
            <h1>The Pantry</h1>
            <p>The Pantry offers a load of items from hot and cold food to a arrangments of drinks and other snacks</p>
          </div>
            <button className="shopbutton"> 
            View Menu 
            </button>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
        Logout
        </button>
    </div>
    </div>
  );
}

export default StudentHome;
