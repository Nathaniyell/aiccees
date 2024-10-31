"use client"
import { useEffect, useState } from "react";

function CountdownTimer() {
  const isBrowser = typeof window !== "undefined";

  const getTargetTime = () => {
    return new Date("2024-09-26T00:00:00").getTime(); // Fixed event date
  };

  const calculateTimeLeft = (targetTime) => {
    const now = new Date().getTime();
    const difference = targetTime - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  // Initialize state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!isBrowser) return;

    const targetTime = getTargetTime();
    setTimeLeft(calculateTimeLeft(targetTime));

    // Update the countdown every second
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTime));
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [isBrowser]);

  return (
    <div>
      <p className="text-sm font-bold text-prigreentext">
        {timeLeft.days} days: {timeLeft.hours} hours: {timeLeft.minutes}{" "}
        minutes: {timeLeft.seconds} seconds
      </p>
    </div>
  );
}

export default CountdownTimer;
