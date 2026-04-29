export const createBoard = (size) => {
  const total = size * size;

  return Array.from({ length: total }, (_, i) => ({
    id: i,
    type: Math.random() > 0.7 ? "boom" : "mole",
    isFlipped: false,
    isHit: false,
  }));
};
