import React from "react";
import PlayerCarousel from "../components/PlayerCarousel";
import CSKKings from "../components/CSKKings";
import CountdownTimer from "../components/CountdownTimer";
import NewsSection from "../components/NewsSection";

const Homepage = () => {
    return (
        <main className="bg-gray-100 min-h-screen flex flex-col items-center">
            <PlayerCarousel />
            <br>
            
            </br>
            <br>
            
            </br>
            <CountdownTimer />
            <NewsSection />
            <CSKKings />
        </main>
    );
};

export default Homepage;
