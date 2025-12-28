import React from "react";
import { createRoot } from "react-dom/client";
import restaurants from "./data";

/* Header Functional Component */
const Header = () => {
  return(
    <div className = "header">
      <div className="logo-container">
        <img className= "logo"
        src="https://icon-library.com/images/food-app-icon/food-app-icon-5.jpg"
        />
      </div>
      <div className = "nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          </ul>
      </div>
      </div>
  ) 
};

const RestaurantCard = ({ restaurant }) => {
  if (!restaurant) return null;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={restaurant.image}
      />
      <h3>{restaurant.name}</h3>
      <h4>{restaurant.areaName || restaurant.locality}</h4>
      <h4>{restaurant.avgRating} stars</h4>
      <h4>{restaurant.deliveryTime} mins</h4>
    </div>
  );
};


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurants.map((res) => (
          <RestaurantCard key={res.id} restaurant={res} />
          
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
    <Header/>
    <Body/>
    </div>
  );
};

export default App;

const container = document.getElementById("root");
// Reuse existing root to avoid calling createRoot multiple times (helps with HMR)
const root = window.__REACT_ROOT__ || (window.__REACT_ROOT__ = createRoot(container));
root.render(<App />);
