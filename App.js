const heading = React.createElement(
  "h1",
  { id: "header", xyz: "value" },
  "Hello world from React"
);

// Nested structure
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },[
      //Sibling elements ko ham array me daal ke render kara sakte hai
      React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag")]
  )
);

// App = combination of everything
//means ham ek root se sare components ko render kara sakte hai
const App = React.createElement(
  "div",
  { id: "app" },
  heading,
  parent
);

// Single root render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App);
