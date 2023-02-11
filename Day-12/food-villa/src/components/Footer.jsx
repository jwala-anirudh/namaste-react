import { useContext } from "react";

import UserContext from "../context/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <h4>
      This site is developed by {user.name} - {user.email}
    </h4>
  );
};

export default Footer;
