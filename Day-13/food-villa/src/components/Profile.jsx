import { useState, useEffect } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);

  console.log("render Function");

  useEffect(() => {
    // API Call
    console.log("useEffect");

    const timer = setInterval(() => {
      console.log("NAMASTE REACT OP");
    }, 1000);

    // Called when you are unmounting it
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      <h3>Name: {props.name}</h3>
      <h4>Count: {count}</h4>
      <button onClick={() => setCount(1)}>Count</button>
    </div>
  );
};

export default Profile;
