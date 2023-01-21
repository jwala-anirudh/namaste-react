import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

// import { restaurantList } from "../constants";

const filterData = (searchText, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
};

const Body = () => {
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
   */

  useEffect(() => {
    // API call
    console.log("useEffect");
    getRestaurants();
  }, []);

  console.log("render"); //-> Called first, before useEffect()

  async function getRestaurants() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    console.log(json);

    // Optional Chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // * Conditional rendering
  // if restaurant is empty => shimmer UI
  // if restaurant has data => actual data UI

  // not render component (Early return)
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
            // console.log(e.target.value);
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
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          ))
        )}
      </div>
    </>
  );
};

export default Body;
