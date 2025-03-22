import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isCSKKingsActive, setIsCSKKingsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const cskKingsSection = document.getElementById("csk-kings-section");
            if (cskKingsSection) {
                const rect = cskKingsSection.getBoundingClientRect();
                const inView = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
                setIsCSKKingsActive(inView);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`navbar ${isCSKKingsActive ? "navbar-csk" : ""} ${
                isHovered ? "navbar-hovered" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="navbar-container">
                <div className="navbar-left">
                    <img src={"/images/csklogo.png"} alt="CSK Logo" className="navbar-logo" />
                </div>

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
