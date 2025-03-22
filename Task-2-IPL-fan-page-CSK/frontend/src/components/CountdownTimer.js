import React, { useEffect, useState } from "react";
import moment from "moment";
import "../styles/CountdownTimer.css";

const matchDate = moment("2025-04-01T19:30:00"); // Set actual match time

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = moment();
        const diff = matchDate.diff(now);

        if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

        const duration = moment.duration(diff);

        return {
            days: Math.floor(duration.asDays()),
            hours: duration.hours(),
            minutes: duration.minutes(),
            seconds: duration.seconds(),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="countdown-container">
            <h2 className="countdown-title">Next Match Countdown</h2>
            <br></br>
            <div className="countdown-box">
                {Object.entries(timeLeft).map(([label, value]) => (
                    <div key={label} className="countdown-item-wrapper" style={{ display: "flex", alignItems: "center" }}>
                        <div className="countdown-item">
                            <span className="countdown-number">{value}</span>
                        </div>
                        <span className="countdown-label">{label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountdownTimer;
