import React from "react";
import Marquee from "react-fast-marquee";
import "../styles/PlayerCarousel.css";

// Player Images
const playerImages = [
    "/images/dhoni.png",
    "/images/bravo.png",
    "/images/jadeja.png",
    "/images/deepak.png",
    "/images/a-pc13.png",
    "/images/b-pc9.png",
    "/images/d-pc8.png",
    "/images/g-pc6.png",
    "/images/gg-pc14.png",
    "/images/pc1.png",
    "/images/pc3.png",
    "/images/pc4.png",
    "/images/pc5.png",
    "/images/pc7.png",
    "/images/pc10.png",
    "/images/pc11.png",
    "/images/pc12.png",
    "/images/pc16.png",
    "/images/pc17.png",
    "/images/pc18.png",
    "/images/pc20.png",
    "/images/r-pc2.png",
    "/images/sd-pc15.png",
];

// Function to generate "KING's" animation background
const generateKingsText = () => {
    const kingsArray = [];
    for (let i = 0; i < 72; i++) {
        kingsArray.push(
            <div
                key={i}
                className="kings-text"
                style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                }}
            >
                KING's
            </div>
        );
    }
    return kingsArray;
};

const PlayerCarousel = () => {
    return (
        <div className="relative py-4 mt-16 bg-opacity-50 bg-yellow-500 rounded-lg shadow-lg z-10 overflow-hidden">
            {/* "KING's" Background Animation (ONLY inside PlayerCarousel) */}
            <div className="kings-bg">{generateKingsText()}</div>

            {/* Player Scrolling Marquee (No Pause on Hover) */}
            <Marquee speed={50} gradient gradientWidth={80} gradientColor={[247, 210, 10]} className="flex items-center">
                {playerImages.map((image, index) => (
                    <div key={index} className="relative mx-4">
                        <img
                            src={image}
                            alt={`Player ${index + 1}`}
                            className="player-image cursor-pointer h-24 md:h-28 lg:h-32"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default PlayerCarousel;
