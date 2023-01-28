import { Component } from "react";
// import { Outlet } from "react-router-dom";

import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const About2 = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        cumque sequi ipsam minima quam eligendi asperiores distinctio, natus
        temporibus facilis.
      </p>

      {/* <Outlet /> */}
      <Profile name={"Anirudh"} />
      <ProfileClass name={"Anirudh Class"} />
    </div>
  );
};

class About extends Component {
  constructor(props) {
    super(props);

    console.log("1. Parent Class - constructor");
  }

  componentDidMount() {
    console.log("3. Parent Class - componentDidMount");
  }

  render() {
    console.log("2. Parent Class - render");
    return (
      <div>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          cumque sequi ipsam minima quam eligendi asperiores distinctio, natus
          temporibus facilis.
        </p>

        {/* <Profile name={"Anirudh"} /> */}
        <ProfileClass name={"First Child"} />
        {/* <ProfileClass name={"Second Child"} /> */}
      </div>
    );
  }
}

export default About;
