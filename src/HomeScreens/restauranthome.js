import React from "react";
import "./homescreen.css";
import Order from '../Order/index.js';
import SearchFoodItems from '../Order/index.js';




const name = localStorage.getItem("name");


function RestaurantHome(props) {
  const handleLogout = () => {
    props.setLoggedIn(false);
  };

  function createMenu() {
    alert('Create Menu');
    console.log("Create menu clicked");
    
  }

  function orderHistory() {
    alert('Order History');
    console.log("Order History clicked");
    
  }

  function manageAccount() {
    alert('Manage Account');
    console.log("Manage Account clicked");
    
  }

  


  return (
    <div className="container">
      <h1 className="home-Title">UniScran</h1>
      <div className="button-container">
        <button className="button" onClick={createMenu}> 
        Create/Edit menu
        </button>
        <button className="button" onClick={orderHistory}> 
        Order history
        </button>
        <button className="button" onClick={manageAccount}> 
        Manage account
        </button>
        </div>
      <h3 className="hey-msg">Hey {name}, Welcome to UniSCRAN</h3>
      <h1 className="home-action">Order requests:</h1>
      <Order></Order>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
     </button>
    </div>
  );
}

export default RestaurantHome;
