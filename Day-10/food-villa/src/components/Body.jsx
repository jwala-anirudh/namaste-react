import { useState, useEffect } from "react";

// Components
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

// Helper
import { filterData } from "../utils/helper";

// Custom hooks
import useOnline from "../hooks/useOnline";

const Body = () => {
  const [searchText, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Your device is not connected, please try again!</h1>;
  }

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-green-300 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-purple-900 hover:bg-purple-300 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurant match your filter!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant?.data?.id} {...restaurant?.data} />
          ))
        )}
      </div>
    </>
  );
};

export default Body;
