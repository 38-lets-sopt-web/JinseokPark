import { useState, useCallback } from "react";
import { MESSAGE } from "../constants/game";

export const useGameState = () => {
  const [score, setScore] = useState(0);
  const [stats, setStats] = useState({ success: 0, fail: 0 });
  const [message, setMessage] = useState(MESSAGE.ready);

  const onHitSuccess = useCallback(() => {
    setScore((prev) => prev + 1);
    setStats((prev) => ({ ...prev, success: prev.success + 1 }));
    setMessage(MESSAGE.hit);
  }, []);

  const onHitFail = useCallback(() => {
    setScore((prev) => Math.max(0, prev - 1));
    setStats((prev) => ({ ...prev, fail: prev.fail + 1 }));
    setMessage(MESSAGE.bomb);
  }, []);

  const resetGameState = useCallback(() => {
    setScore(0);
    setStats({ success: 0, fail: 0 });
    setMessage(MESSAGE.ready);
  }, []);

  return {
    gameState: {
      score,
      stats,
      message,
    },
    onHitSuccess,
    onHitFail,
    resetGameState,
  };
};
