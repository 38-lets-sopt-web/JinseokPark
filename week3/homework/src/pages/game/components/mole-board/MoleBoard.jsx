import Mole from "../mole/Mole";

import * as styles from "./MoleBoard.css";

const MoleBoard = ({ moleData, onMoleClick, size }) => {
  return (
    <div className={styles.boardContainer}>
      <div className={styles.boardRecipe({ size })}>
        {moleData.map((data) => (
          <Mole
            key={data.id}
            type={data.type}
            isFlipped={data.isFlipped}
            isHit={data.isHit}
            onClick={() => onMoleClick(data)}
          />
        ))}
      </div>
    </div>
  );
};

export default MoleBoard;
