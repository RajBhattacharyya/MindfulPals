import React from "react";
import "./Headbar.css";
import logo from "../assets/logo.svg"; // Import the SVG file

function Headbar() {
  return (
    <div className="head">
      <div className="techlogo">
        <img src={logo} alt="Tech Logo" />
      </div>
      <div className="headings">
        <h2>MindfulPals</h2>
      </div>
      <div>
        <button className="logout">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Headbar;
