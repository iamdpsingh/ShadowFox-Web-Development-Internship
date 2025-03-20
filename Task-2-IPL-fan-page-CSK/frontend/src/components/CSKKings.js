import { useState } from "react";
import { Link } from "react-router-dom"; // For navigation


const players = [
  { name: "MS Dhoni", role: "Wicketkeeper", image: "/players/MSD.png", link: "/players/ms-dhoni" },
  { name: "Ruturaj Gaikwad", role: "Batsman", image: "/players/Ruturaj.png", link: "/players/ruturaj-gaikwad" },
  { name: "Ravindra Jadeja", role: "All-Rounder", image: "/players/Jadeja.png", link: "/players/ravindra-jadeja" },
  { name: "Deepak Chahar", role: "Bowler", image: "/players/DeepakChahar.png", link: "/players/deepak-chahar" },
  { name: "Shivam Dube", role: "All-Rounder", image: "/players/Dubey.png", link: "/players/shivam-dube" },
  { name: "Ajay Mandal", role: "All-Rounder", image: "/players/AjayMandal.png", link: "/players/ajay-mandal" },
  { name: "Mahesh Theekshana", role: "Bowler", image: "/players/MaheshTheekshana.png", link: "/players/mahesh-theekshana" },
  { name: "Matheesha Pathirana", role: "Bowler", image: "/players/MatheeshaPathirana.png", link: "/players/matheesha-pathirana" },
];

export default function CSKSquad() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextPlayers = () => {
    setActiveIndex((prev) => (prev + 1) % players.length);
  };

  const prevPlayers = () => {
    setActiveIndex((prev) => (prev - 1 + players.length) % players.length);
  };

  return (
    <div className="squad-container">
      <h2 className="squad-title">CSK Kings</h2>

      <div className="squad-showcase">
        {/* Left Arrow Button */}
        <button className="nav-button left" onClick={prevPlayers}>❮</button>

        <div className="players-wrapper">
          {/* Display 3 players at a time, looping */}
          {[0, 1, 2].map((offset) => {
            const index = (activeIndex + offset) % players.length;
            const player = players[index];

            return (
              <div 
                key={player.name} 
                className={`player-slot ${offset === 1 ? "center-player" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <img src={player.image} alt={player.name} className="player-img" />
                {offset === 1 && ( // Only show text for center player
                  <div className="player-info">
                    <Link to={player.link} className="player-name">{player.name}</Link>
                    <p className="player-role">{player.role}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Arrow Button */}
        <button className="nav-button right" onClick={nextPlayers}>❯</button>
      </div>
    </div>
  );
}
