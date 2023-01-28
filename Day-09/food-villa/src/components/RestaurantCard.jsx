import { Link } from "react-router-dom";

import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  id,
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
}) => {
  return (
    <div className="card">
      <img src={`${IMG_CDN_URL}/${cloudinaryImageId}`} alt={name} />
      <Link to={`/restaurant/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
