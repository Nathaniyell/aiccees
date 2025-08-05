"use client";

import { useState, useEffect } from "react";

// Counter animation hook
function useCountAnimation(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return count;
}

// Stats component with animated counters
function StatsCard({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  const animatedValue = useCountAnimation(value);

  return (
    <div>
      <div className="text-7xl text-center font-bold text-gray-800 mb-2">
        {animatedValue}
        {suffix}
      </div>
      <div className="text-2xl text-center text-green-700 font-medium">{label}</div>
    </div>
  );
}

export default function AboutStats() {
  return (
    <div className="container mx-auto grid grid-cols-2 px-6 md:grid-cols-3 place-items-center gap-6 mb-14 mt-10 relative z-10">
      <StatsCard
        value={1173}
        label="Global Attendees"
        suffix="+"
      />
      <StatsCard value={86} label="Abstract Submissions" />
      <StatsCard value={51} label="Papers Accepted" />
      <StatsCard value={45} label="Paper Presentations" />
      <StatsCard value={5} label="Panel Sessions" />
      <StatsCard value={7} label="Keynote Speakers" />
    </div>
  );
} 