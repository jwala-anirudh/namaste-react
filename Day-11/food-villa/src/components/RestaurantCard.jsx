import { useContext } from "react";
import { Link } from "react-router-dom";

import { IMG_CDN_URL } from "../constants";
import UserContext from "../context/UserContext";

const RestaurantCard = ({
  id,
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
}) => {
  const { user } = useContext(UserContext);

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={`${IMG_CDN_URL}/${cloudinaryImageId}`} alt={name} />
      <Link to={`/restaurant/${id}`}>
        <h2 className="font-bold text-2xl">{name}</h2>
      </Link>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <h5 className="font-bold">
        {user.name} - {user.email}
      </h5>
    </div>
  );
};

export default RestaurantCard;
