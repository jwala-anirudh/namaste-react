import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/img/swiggy-logo.svg";

import UserContext from "../context/UserContext";

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

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>

          <li className="px-2">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>Cart</li>
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
