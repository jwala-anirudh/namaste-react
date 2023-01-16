import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

import { restaurantList } from "../constants";

/**
 * What is state
 * What is Hooks?
 * What is useState
 */

const filterData = (searchText, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
};

const Body = () => {
  /**
   * In react, we have one-way binding
   * let searchTxt = "KFC";
   *
   * <input value={searchTxt} />
   *
   * Even if we try to write into this input, there is no change you can see on screen
   */

  // searchText is a local state variable
  const [searchText, setSearchInput] = useState(""); // To create state variable
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchText, restaurants);
            // update the state - restaurants
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </>
  );
};

export default Body;
