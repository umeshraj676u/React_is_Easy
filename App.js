import React from "react";
import ReactDOM from "react-dom/client";

// Simple heading element
const heading = React.createElement(
  "h1",
  { id: "header", xyz: "value" },
  "Hello world from React"
);

// Nested structure with siblings
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
      // Sibling elements ko array me rakh sakte hain
      React.createElement("h1", { key: "h1" }, "I am h1 tag"),
      React.createElement("h2", { key: "h2" }, "I am h2 tag")
    ]
  )
);

// App = combination of everything
const App = React.createElement(
  "div",
  { id: "app" },
  heading,
  parent
);

// Single root render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App); // ✅ <App /> NAHI likhna
