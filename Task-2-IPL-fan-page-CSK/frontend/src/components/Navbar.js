import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar flex justify-between items-center px-4 py-2 shadow-md">
            <h1 className="text-2xl font-bold">CSK Fan Page</h1>
            <div className="space-x-30">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/schedule" className="hover:underline">Match Schedule</Link>
                <Link to="/live-updates" className="hover:underline">Live Updates</Link>
                <Link to="/players" className="hover:underline">Players</Link>
            </div>
        </nav>
    );
};

export default Navbar;
