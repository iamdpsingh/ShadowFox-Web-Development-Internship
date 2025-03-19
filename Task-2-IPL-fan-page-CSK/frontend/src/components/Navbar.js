import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <nav
            className={`navbar ${isHovered ? "navbar-hovered" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-left">
                    <img src={"/images/csklogo.png"} alt="CSK Logo" className="navbar-logo" />
                </div>

                {/* Navbar Links */}
                <div className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/schedule">Schedule</Link>
                    <Link to="/live-updates">Live</Link>
                    <Link to="/players">Players</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
