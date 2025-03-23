import React from "react";
import "../styles/schedule.css";

const MatchCard = ({ match }) => {
  return (
    <div className="match-card">
      <div className="team">
        <img src={match.team1.logo} alt={match.team1.name} />
        <p>{match.team1.name}</p>
      </div>
      <span className="vs">VS</span>
      <div className="team">
        <img src={match.team2.logo} alt={match.team2.name} />
        <p>{match.team2.name}</p>
      </div>
      <div className="match-info">
        <p>{match.date} | {match.time}</p>
        <p>{match.venue}</p>
      </div>
      {match.status === "LIVE" && <span className="live-badge">LIVE</span>}
    </div>
  );
};

export default MatchCard;
