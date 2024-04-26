import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", {}, "namaste react from react")

// console.log(heading);
// JSX (transpiled before it recahes to js engine)-Parcel - Babel
// JSX - Babel transpiles it to React.createElement(js object)=>HTMLelement(render)
const jsxHeading = <h1>namaste react from jsx</h1>

const Header = () => (
  <div className="header">
    <h4>Logo</h4>
    <input type="text" placeholder="Search...."></input>
    <h4>User</h4>
  </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
