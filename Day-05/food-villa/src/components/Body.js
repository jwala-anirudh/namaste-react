import RestaurantCard from "./RestaurantCard";

import { restaurantList } from "../constants";

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => (
        <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
      ))}
    </div>
  );
};

export default Body;
