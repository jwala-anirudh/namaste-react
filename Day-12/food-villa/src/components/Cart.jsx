import React from 'react';
import FoodItem from './FoodItem';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-2">
      <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
      <button className="bg-red-100 p-2 m-5" onClick={() => handleClearCart()}>
        Clear Cart
      </button>

      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
