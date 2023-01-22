import { useState, useEffect } from "react";

import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

const filterData = (searchText, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
};

const Body = () => {
  /**
   * 1) Never declare useState as a part of conditions
   *
   * if (condition) {
   *  const [var, setVar] = useState();
   * } else {}
   *
   * 2) Never declare useState inside a for-loop
   *
   * 3) Never use "useState()" outside a functional component
   *
   */
  const [searchText, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  /**
   * 1) useEffect() with empty dep array
   *    Called once after render
   *
   * 2) useEffect() with dep array [searchText]
   *    Once after render + Called everytime after render "searchText" changes
   *
   * 3) useEffect() with dep array [restaurants]
   *    Once after render + Called everytime restaurants changes that is on click of "Search" button
   *
   * 4) useEffect() without dep array
   *    Once after render + useEffect is called
   *    Now, whenever there is a change in state that will eventually trigger re-"render"
   *    And since there is no dep array "useEffect()" is called again.
   *    Conclusion, when there is no dep array for every render there is a useEffect() called
   *
   * 5) Within a component you can have multiple useEffect()
   */

  useEffect(() => {
    console.log("useEffect");
    getRestaurants();
  }, []);

  console.log("render");

  async function getRestaurants() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurant match your filter!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard {...restaurant.data} />
          ))
        )}
      </div>
    </>
  );
};

export default Body;
