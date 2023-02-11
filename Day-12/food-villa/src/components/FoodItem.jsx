import { useContext } from 'react';

import { IMG_CDN_URL } from '../constants';

const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img
        src={
          cloudinaryImageId
            ? `${IMG_CDN_URL}/${cloudinaryImageId}`
            : 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/572df759503553.5a25218f45668.png'
        }
        alt={name}
        className="rounded"
      />
      <h2 className="font-bold text-2xl">{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees: {(price / 100).toFixed(2)}</h4>
    </div>
  );
};

export default FoodItem;
