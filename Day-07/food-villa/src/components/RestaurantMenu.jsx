import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../constants";

const RestaurantMenu = () => {
  // To read a dynamic URL params
  const { resId } = useParams();

  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=17.385044&lng=78.486671&menuId=${resId}`
    );
    const json = await data.json();
    // console.log(json.data);
    setRestaurantInfo(json.data);
  }

  return !restaurantInfo ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurantInfo?.name}</h2>
        <img
          src={`${IMG_CDN_URL}/${restaurantInfo?.cloudinaryImageId}`}
          alt={restaurantInfo?.name}
          width={254}
          height={165}
        />
        <h3>{restaurantInfo?.area}</h3>
        <h3>{restaurantInfo?.city}</h3>
        <h3>{restaurantInfo?.avgRating} stars</h3>
        <h3>{restaurantInfo?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurantInfo?.menu?.items).map((item) => (
            <li key={item?.id}>{item?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

// Swiggy restaurant details:
/**
 *
 * [
 *    {
 *      id: 13123,
 *      sulgs: {
 *        restaurant: "",
 *        city: "",
 *      }
 *    },
 *    {},
 *    ...
 * ]
 *
 * React route: /restaurants/${restaurant}-${city}-${id}
 * Backend API Call: https://www.swiggy.com/dapi/menu/v4/full?lat=17.385044&lng=78.486671&menuId=4320
 *
 */
