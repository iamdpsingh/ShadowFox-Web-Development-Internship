import React from "react";
import PlayerCarousel from "../components/PlayerCarousel";
import CSKKings from "../components/CSKKings";
import CountdownTimer from "../components/CountdownTimer";
import NewsSection from "../components/NewsSection";
import CSKSocial from "../components/CSKSocial";


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
            <CSKSocial />

        </main>
    );
};

export default Homepage;
