import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/PlayerCollection.css";

const PlayerCollection = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/players")
      .then(response => response.json())
      .then(data => setPlayers(data))
      .catch(error => console.error("Error fetching players:", error));
  }, []);

  return (
    <div className="player-collection">
      <h1 className="title">CSK Player's</h1>
      <div className="grid">
        {players.map(player => (
          <Link key={player.link} to={player.link} className="player-card">
            <img src={player.image} alt={player.name} />
            <h2>{player.name}</h2>
            <p>{player.role}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PlayerCollection;
