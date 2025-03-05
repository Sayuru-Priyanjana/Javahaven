import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCoffee, FaUser, FaSignOutAlt } from "react-icons/fa";
import "./navbar.css";

function NavBar() {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="navbar">
      <div className="navbar-content">
        <Link to="/" className="logo">
          <FaCoffee className="coffee-icon" />
          Java Haven
        </Link>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        </div>

        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <div className="nav-center">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/menu" className="nav-link">Menu</Link>
            <Link to="/intro" className="nav-link">About</Link>
            <Link to="/footer" className="nav-link">Contact</Link>
          </div>

          <div className="auth-links">
            {user ? (
              <div className="user-section">
                <span className="user-email">
                  <FaUser className="user-icon" />{user.email}
                </span>
                <button className="logout-button" onClick={handleLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/signin" className="signin">Sign In</Link>
                <Link to="/signup" className="signup">Sign Up</Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;