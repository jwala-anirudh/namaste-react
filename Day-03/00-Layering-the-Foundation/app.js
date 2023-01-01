import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { id: "title", key: "h1" },
  "Heading 1"
);
console.log(heading1);

const heading2 = React.createElement(
  "h2",
  { id: "title", key: "h2" },
  "Heading 2"
);
console.log(heading2);

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
console.log(container);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(container);
