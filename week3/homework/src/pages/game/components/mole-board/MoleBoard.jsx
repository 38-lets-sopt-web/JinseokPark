import * as styles from "./MoleBoard.css";
import Mole from "../mole/Mole";

const MoleBoard = ({ moleData, onMoleClick, size = 4 }) => {
  return (
    <div className={styles.boardContainer}>
      <div className={styles.boardRecipe({ size })}>
        {moleData.map((data) => (
          <Mole
            key={data.id}
            type={data.type}
            isFlipped={data.isFlipped}
            isHit={data.isHit}
            onClick={() => onMoleClick(data.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MoleBoard;
