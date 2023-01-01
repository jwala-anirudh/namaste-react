import React from "react";
import ReactDOM from "react-dom/client";

/**
 * React components
 * ===================
 * 1. Functional (New way of writing)
 * 2. Class based components (Present for long time)
 *
 */

// React Element -> This is an object that we get from React.createElement
const heading = (
  <h2 id="title" key="h2">
    React Element
  </h2>
);

/**
 * Use of component inside a component, we call it as Component Composition
 */
const Title = () => (
  <h2 id="title" key="h2">
    React Component
  </h2>
);

/**
 *  React Funtional component: A functional component is a simple JavaScript
 *  function that returns JSX/React.createElement(). This is a FUNCTION
 * */
const HeaderComponent = () => {
  return (
    <div>
      <h1>Namate React functional component</h1>
      <h2>This is a h2 tag</h2>
      {/* This is how we can add elements into another component */}
      {heading}
      {/* This is how we can add functional component inside another */}
      <Title />
      {Title()}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); -> For React element
root.render(<HeaderComponent />); // -> For React Functional Component
