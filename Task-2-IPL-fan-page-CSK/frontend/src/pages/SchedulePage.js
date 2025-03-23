import axios from "axios";
import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import "../styles/schedule.css"; // Import the updated CSS

const teamLinks = {
  CSK: "https://www.chennaisuperkings.com/",
  MI: "https://www.mumbaiindians.com/",
  RCB: "https://www.royalchallengers.com/",
  DC: "https://www.delhicapitals.in/",
  SRH: "https://www.sunrisershyderabad.in/",
  KKR: "https://www.kkr.in/",
  RR: "https://www.rajasthanroyals.com/",
  PBKS: "https://www.punjabkingsipl.in/",
  LSG: "https://www.lucknowsupergiants.in/",
  GT: "https://www.gujaratgiants.com/",
};

const SchedulePage = () => {
  const [matches, setMatches] = useState([]);
  const matchCardsRef = useRef([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/matches")
      .then(response => setMatches(response.data))
      .catch(error => console.error("❌ Error fetching match data:", error));
  }, []);

  // ✅ GSAP Animation when matches load
  useEffect(() => {
    if (matches.length > 0) {
      gsap.fromTo(
        matchCardsRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [matches]);

  return (
    <div className="schedule-container">
      <h2 className="schedule-title">📅 Upcoming Matches</h2>
      <div className="match-grid">
        {matches.map((match, index) => (
          <div
            key={index}
            ref={(el) => (matchCardsRef.current[index] = el)}
            className="match-card"
          >
            <div className="match-info">
              <h3 className="match-date">{match.date} | {match.time}</h3>
              <p className="match-venue">📍 {match.venue}</p>
              <div className="match-teams">
                <div className="team">
                  <img src={match.team1Logo} alt={match.team1} />
                  <a 
                    href={teamLinks[match.team1]} 
                    className={match.team1.toLowerCase()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {match.team1}
                  </a>
                </div>
                <span className="vs">VS</span>
                <div className="team">
                  <img src={match.team2Logo} alt={match.team2} />
                  <a 
                    href={teamLinks[match.team2]} 
                    className={match.team2.toLowerCase()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {match.team2}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;
