import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/PlayerProfile.css"; 

const PlayerProfile = () => {
  const { playerName } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/players/${playerName}`)
      .then(response => response.json())
      .then(data => setPlayer(data))
      .catch(error => console.error("Error fetching player:", error));
  }, [playerName]);

  if (!player) return <div>Loading...</div>;

  return (
    <div className="player-profile">
      <div className="profile-header">
        <img src={player.image} alt={player.name} className="profile-img" />
        <h1>{player.name}</h1>
        <h3>{player.role}</h3>
      </div>

      <div className="stats">
        <h2>Player Stats</h2>
        <div className="stats-grid">
          <div className="stat-card">Matches: {player.stats.matches}</div>
          <div className="stat-card">Runs: {player.stats.runs}</div>
          <div className="stat-card">Wickets: {player.stats.wickets}</div>
          <div className="stat-card">Strike Rate: {player.stats.strikeRate}</div>
          <div className="stat-card">Economy: {player.stats.economy}</div>
        </div>
      </div>

      <Link to="/players" className="back-button">Back to Squad</Link>
    </div>
  );
};

export default PlayerProfile;
