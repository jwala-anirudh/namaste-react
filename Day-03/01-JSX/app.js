import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { id: "title", key: "h1" },
  "Heading 1"
);
console.log(heading1);
// React.createElement => Gives an Object => React DOM renders as HTML on DOM

const heading2 = (
  <h2 id="title" key="h2">
    Heading 2
  </h2>
);
console.log(heading2);
// JSX uses React.createElement behind the scene
// JSX => React.createElement => Object => HTML (DOM)
// We call line 12-16 as JSX Expression

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
