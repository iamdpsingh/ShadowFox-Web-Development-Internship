import React, { useEffect, useState } from "react";
import axios from "axios";
import { gsap } from "gsap";
import "../styles/Leaderboard.css"; // Updated CSS file

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/leaderboard")
      .then(response => setPlayers(response.data))
      .catch(error => console.error("❌ Error fetching leaderboard data:", error));
  }, []);

  // ✅ GSAP Animation when leaderboard loads
  useEffect(() => {
    if (players.length > 0) {
      gsap.fromTo(
        ".csk-leaderboard-table tbody tr",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [players]);

  return (
    <div className="csk-leaderboard-container">
      <h2 className="csk-leaderboard-title">🏏 CSK Player Leaderboard</h2>
      <table className="csk-leaderboard-table">
        <thead>
          <tr>
            <th>Player</th>
            <th>Matches</th>
            <th>Runs</th>
            <th>Wickets</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index} onClick={() => setSelectedPlayer(player)}>
              <td className="csk-player-name">{player.name}</td>
              <td>{player.matches}</td>
              <td>{player.runs}</td>
              <td>{player.wickets}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Pop-up for player details */}
      {selectedPlayer && (
        <div className="csk-player-popup">
          <span className="csk-close-popup" onClick={() => setSelectedPlayer(null)}>✖</span>
          <h3>{selectedPlayer.name}</h3>
          <img src={selectedPlayer.image} alt={selectedPlayer.name} className="csk-popup-player-image" />
          <p>
            <a href={selectedPlayer.profileLink} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </p>
          <div className="csk-popup-stats">
            <div className="csk-stat-circle animated">
              <span>{selectedPlayer.matches}</span>
              <p>Matches</p>
            </div>
            <div className="csk-stat-circle animated">
              <span>{selectedPlayer.runs}</span>
              <p>Runs</p>
            </div>
            <div className="csk-stat-circle animated">
              <span>{selectedPlayer.wickets}</span>
              <p>Wickets</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
