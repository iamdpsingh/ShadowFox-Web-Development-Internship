import React from "react";
// import Navbar from "../components/Navbar";
import PlayerCarousel from "../components/PlayerCarousel";
import CSKKings from "../components/CSKKings";
import CountdownTimer from "../components/CountdownTimer";
import NewsSection from "../components/NewsSection";
// import Footer from "../components/Footer";

const Homepage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* <Navbar /> */}
            <PlayerCarousel />
            <CountdownTimer />
            <NewsSection />
            <CSKKings />
            {/* <Footer /> */}
        </div>
    );
};

export default Homepage;
