import { useEffect, useRef } from "react";

export const useShowMole = ({ isActive, onShow }) => {
  const showTimerRef = useRef(null);
  useEffect(() => {
    if (!isActive) return;

    let stopGame = false;

    const schedule = () => {
      const delay = 1000;

      showTimerRef.current = setTimeout(() => {
        if (stopGame) return;

        onShow?.();
        schedule();
      }, delay);
    };

    schedule();

    return () => {
      stopGame = true;
      clearTimeout(showTimerRef.current);
    };
  }, [isActive, onShow]);
};
