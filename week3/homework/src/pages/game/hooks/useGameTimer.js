import { useState, useEffect, useCallback } from "react";

export const useGameTimer = ({ isActive, initialTime = 60, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime * 1000);

  const resetTimer = useCallback(() => {
    setTimeLeft(initialTime * 1000);
  }, [initialTime]);

  useEffect(() => {
    if (!isActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const nextValue = prev - 10;
        if (nextValue <= 0) {
          onTimeUp?.();
          return 0;
        }
        return nextValue;
      });
    }, 10);

    return () => clearInterval(timer);
  }, [isActive, onTimeUp]);

  return {
    timeLeft,
    seconds: (timeLeft / 1000).toFixed(2),
    resetTimer,
  };
};
