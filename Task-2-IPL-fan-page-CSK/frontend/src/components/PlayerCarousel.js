import React from "react";
import Marquee from "react-fast-marquee";

const playerImages = [
    // "/images/csklogo.png",
    "/images/dhoni.png",
    "/images/raina.png",
    "/images/jadeja.png",
    "/images/bravo.png",
    "/images/gaikwad.png",
    "/images/deepak.png",
];

const PlayerCarousel = () => {
    return (
        <div className="bg-yellow-500 py-4">
            <Marquee pauseOnHover speed={60}>
                {playerImages.map((image, index) => (
                    <img key={index} src={image} alt={`Player ${index}`} className="h-40 mx-4" />
                ))}
            </Marquee>
        </div>
    );
};

export default PlayerCarousel;
