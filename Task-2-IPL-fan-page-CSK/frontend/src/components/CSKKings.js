import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const players = [
  { id: 1, name: "MS Dhoni", role: "Wicket Keeper", img: "/players/MSD.png", profile: "/players/dhoni-profile" },
  { id: 2, name: "Ravindra Jadeja", role: "All-Rounder", img: "/players/Jadeja.png", profile: "/players/jadeja-profile" },
  { id: 3, name: "Ruturaj Gaikwad", role: "Batsman", img: "/players/Ruturaj.png", profile: "/players/ruturaj-profile" },
];

export default function CSKKings() {
  const [activeIndex, setActiveIndex] = useState(0);
  const playerRefs = useRef([]);

  const prevPlayer = () => {
    setActiveIndex((prev) => (prev === 0 ? players.length - 1 : prev - 1));
  };

  const nextPlayer = () => {
    setActiveIndex((prev) => (prev === players.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    gsap.to(playerRefs.current[activeIndex], { scale: 1.2, opacity: 1, duration: 0.5 });
    players.forEach((_, i) => {
      if (i !== activeIndex) {
        gsap.to(playerRefs.current[i], { scale: 0.8, opacity: 0.5, duration: 0.5 });
      }
    });
  }, [activeIndex]);

  return (
    <div className="relative flex flex-col items-center py-12 bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/stadium-sketch.png')] bg-cover opacity-20"></div>

      <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-8 relative z-10">
        CSK Kings 👑
      </h2>

      <div className="relative flex items-center justify-center w-full">
        <button onClick={prevPlayer} className="absolute left-5 md:left-10 text-white text-2xl md:text-3xl z-10 bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition">
          <FaChevronLeft />
        </button>

        <div className="relative flex items-center justify-center w-full h-64">
          {players.map((player, index) => (
            <div
              key={player.id}
              ref={(el) => (playerRefs.current[index] = el)}
              className="absolute cursor-pointer transform transition-transform"
            >
              <img src={player.img} alt={player.name} className="w-32 md:w-40 lg:w-48 drop-shadow-lg" />
            </div>
          ))}
        </div>

        <button onClick={nextPlayer} className="absolute right-5 md:right-10 text-white text-2xl md:text-3xl z-10 bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition">
          <FaChevronRight />
        </button>
      </div>

      <div key={activeIndex} className="mt-5 bg-white bg-opacity-20 px-6 py-3 rounded-lg shadow-md backdrop-blur-md text-center">
        <h3 className="text-lg md:text-xl font-bold text-yellow-300">{players[activeIndex].name}</h3>
        <p className="text-yellow-400 text-sm md:text-base">{players[activeIndex].role}</p>
        <a href={players[activeIndex].profile} className="text-xs md:text-sm text-blue-300 hover:underline">
          View Profile →
        </a>
      </div>
    </div>
  );
}
