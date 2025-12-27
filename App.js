import React from "react";
import ReactDOM from "react-dom/client";

//React Element 
const heading = (
  <h1 className="head" tabIndex ="5">
    Hello World from React using jsx!
  </h1>
);

// React functional component
const HeadingComponent = () => (
  <div id="container">
    {heading}
    <h1 className="heading">Hello World from React using component! </h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); 