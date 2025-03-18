import moment from "moment";
import React, { useEffect, useState } from "react";

const matchDate = moment("2025-04-01T19:30:00"); // Set actual match date & time

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = moment();
        const diff = matchDate.diff(now);

        if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

        const duration = moment.duration(diff);

        return {
            days: Math.floor(duration.asDays()), // ✅ Ensure whole number
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
        <div className="bg-blue-800 text-white text-center p-6">
            <h2 className="text-3xl font-bold mb-2">Next Match Countdown</h2>
            <div className="flex justify-center space-x-6 text-2xl font-semibold">
                <div>{timeLeft.days}d</div>
                <div>{timeLeft.hours}h</div>
                <div>{timeLeft.minutes}m</div>
                <div>{timeLeft.seconds}s</div>
            </div>
        </div>
    );
};

export default CountdownTimer;
