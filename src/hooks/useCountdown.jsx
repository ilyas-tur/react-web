import { useState, useEffect, useCallback } from "react";

const useCountdown = (expiryTimestamp) => {
  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const difference = expiryTimestamp - now;
    if (difference > 0) {
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { hours: 0, minutes: 0, seconds: 0 };
  }, [expiryTimestamp]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!expiryTimestamp) return;
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [expiryTimestamp, calculateTimeLeft]);

  return timeLeft;
};

export default useCountdown;
