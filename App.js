import React from "react";
import { createRoot } from "react-dom/client";


/* Header Functional Component */
const Header = () => {
  return (
    <header className="header">
    
      <div className="logo">MyApp</div>

   
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>

     
      <div className="user">👨‍🎓</div>
    </header>
  );
};
const App = () => {
  return (
    <Header/>
  );
};



const root = createRoot(document.getElementById("root"));
root.render(<App/>);
