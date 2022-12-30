const heading1 = React.createElement("h1", { id: "title" }, "Heading 1");
console.log(heading1); // React element is an object

const heading2 = React.createElement("h2", { id: "title" }, "Heading 2");

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
console.log(container);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

// passing the react element inside the root
root.render(container);
