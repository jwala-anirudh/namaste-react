import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/img/swiggy-logo.svg';

import UserContext from '../context/UserContext';

// React redux selector to read from store
import { useSelector } from 'react-redux';

const loggedInUser = () => {
  // API call to check authentication
  return false;
};

const Title = () => (
  <Link to="/">
    <img className="h-28 p-2" alt="food villa" src={Logo} />
  </Link>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log('Cart items', cartItems);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>

          <Link to="/about">
            <li className="px-2">About</li>
          </Link>

          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>

          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>

          <Link to="/cart">
            <li className="px-2">Cart - {cartItems.length} items</li>
          </Link>
        </ul>
      </div>
      <span className="p-10 font-bold text-red-900">{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
