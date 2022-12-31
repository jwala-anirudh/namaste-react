import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", { id: "title" }, "Heading 1");
// <h1 id="title">Heading 1</h1>

// { id: "title", hello: "world" }
// Here we can pass anything there is no validation, this is called as Props

const heading2 = React.createElement("h2", { id: "title" }, "Heading 2");
// <h2 id="title">Heading 2</h2>

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
/**
 * <div id="container">
 *  <h1 id="title">Heading 1</h1>
 *  <h2 id="title">Heading 2</h2>
 * </div>
 */

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
