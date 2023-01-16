const Title = () => (
  <a href="#">
    <img
      className="logo"
      alt="food villa"
      src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
