import { useState, useCallback } from "react";
import { createBoard } from "../utils/createBoard";

export const useGameBoard = (size) => {
  const [moleData, setMoleData] = useState([]);

  const initBoard = useCallback(() => {
    setMoleData(createBoard(size));
  }, [size]);

  const flipCard = (prev, id) => {
    return prev.map((mole) =>
      mole.id === id ? { ...mole, isFlipped: true } : mole,
    );
  };

  const resetCard = useCallback((id) => {
    setMoleData((prev) =>
      prev.map((mole) =>
        mole.id === id ? { ...mole, isFlipped: false } : mole,
      ),
    );

    setTimeout(() => {
      setMoleData((prev) =>
        prev.map((mole) =>
          mole.id === id
            ? {
                ...mole,
                type: Math.random() > 0.7 ? "boom" : "mole",
                isHit: false,
              }
            : mole,
        ),
      );
    }, 600);
  }, []);

  const hitCard = useCallback(
    (id) => {
      setMoleData((prev) =>
        prev.map((mole) => (mole.id === id ? { ...mole, isHit: true } : mole)),
      );

      setTimeout(() => {
        resetCard(id);
      }, 600);
    },
    [resetCard],
  );

  const popMole = useCallback(() => {
    setMoleData((prev) => {
      if (prev.some((m) => m.isFlipped)) return prev;

      const closed = prev.filter((m) => !m.isFlipped);
      if (closed.length === 0) return prev;

      const randomIndex = Math.floor(Math.random() * closed.length);
      const targetId = closed[randomIndex].id;

      setTimeout(() => resetCard(targetId), 1000);

      return flipCard(prev, targetId);
    });
  }, [resetCard]);

  return { moleData, initBoard, hitCard, popMole };
};
