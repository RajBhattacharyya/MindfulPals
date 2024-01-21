import React from "react";
import "./Headbar.css";
import logo from "../assets/logo.svg"; // Import the SVG file
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Headbar() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  
  return (
    <div className="head">
      <div className="techlogo">
        <img src={logo} alt="Tech Logo" />
      </div>
      <div className="headings">
        <h2>MindfulPals</h2>
      </div>
      {isLoggedIn && (<div className="logout-button">
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
      </div>
      )}
    </div>
  );
}

export default Headbar;
