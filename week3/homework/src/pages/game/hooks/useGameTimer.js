import { useState, useEffect, useCallback } from "react";

export const useGameTimer = ({ isActive, initialTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime * 1000);

  const resetTimer = useCallback(() => {
    setTimeLeft(initialTime * 1000);
  }, [initialTime]);

  useEffect(() => {
    if (!isActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 10));
    }, 10);

    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  useEffect(() => {
    if (timeLeft <= 0 && isActive) {
      onTimeUp?.();
    }
  }, [timeLeft, isActive, onTimeUp]);

  return {
    seconds: (timeLeft / 1000).toFixed(2),
    resetTimer,
  };
};
