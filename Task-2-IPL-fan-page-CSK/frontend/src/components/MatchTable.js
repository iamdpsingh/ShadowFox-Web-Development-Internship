import React from "react";
import "../styles/schedule.css";

const MatchTable = ({ matches = [] }) => { // ✅ Default value to prevent "undefined" issues
  if (!Array.isArray(matches) || matches.length === 0) {
    return <p className="no-matches">⚠️ No matches available.</p>; // ✅ Show a message instead of breaking
  }

  return (
    <table className="match-table">
      <thead>
        <tr>
          <th>Teams</th>
          <th>Date</th>
          <th>Time</th>
          <th>Venue</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {matches.map((match, index) => (
          <tr key={index}>
            <td>
              <div className="teams">
                <span>{match?.team1?.name || "TBA"}</span> <strong>VS</strong> <span>{match?.team2?.name || "TBA"}</span>
              </div>
            </td>
            <td>{match?.date || "TBA"}</td>
            <td>{match?.time || "TBA"}</td>
            <td>{match?.venue || "TBA"}</td>
            <td>
              {match?.status === "LIVE" ? (
                <span className="live-status">LIVE</span>
              ) : (
                <span>{match?.status || "Scheduled"}</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MatchTable;
