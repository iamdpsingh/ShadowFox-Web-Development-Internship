import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/CSKKings.css";

export default function CSKSquad() {
  const [players, setPlayers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/players")  // Fetch from backend
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.error("Error fetching players:", err));
  }, []);

  const nextPlayers = () => {
    setActiveIndex((prev) => (prev + 1) % players.length);
  };

  const prevPlayers = () => {
    setActiveIndex((prev) => (prev - 1 + players.length) % players.length);
  };

  return (
    <div id="csk-kings-section" className="squad-container">
      <h2 className="squad-title">CSK Kings</h2>

      <div className="squad-showcase">
        <button className="nav-button left" onClick={prevPlayers}>❮</button>

        <div className="players-wrapper">
          {players.length > 0 && [0, 1, 2].map((offset) => {
            const index = (activeIndex + offset) % players.length;
            const player = players[index];

            return (
              <div 
                key={player._id} 
                className={`player-slot ${offset === 1 ? "center-player" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <img src={player.image} alt={player.name} className="player-img" />
                {offset === 1 && ( // Show text only for center player
                  <div className="player-info">
                    <Link to={player.link} className="player-name">{player.name}</Link>
                    <p className="player-role">{player.role}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button className="nav-button right" onClick={nextPlayers}>❯</button>
      </div>
    </div>
  );
}
