import * as styles from "./Mole.css";

import MOLE_DEFAULT_IMG from "@/pages/game/assets/images/mole.webp";
import MOLE_HIT_IMG from "@/pages/game/assets/images/hit-mole.webp";
import BOOM_IMG from "@/pages/game/assets/images/bomb.webp";

const Mole = ({ type, isFlipped, isHit, onClick }) => {
  return (
    <div className={styles.cardWrapper} onClick={onClick}>
      <div
        className={`${styles.cardInner} ${isFlipped ? styles.isFlipped : ""}`}
      >
        <div className={styles.cardFront}></div>

        <div className={styles.cardBack}>
          {type === "mole" ? (
            <img
              src={isHit ? MOLE_HIT_IMG : MOLE_DEFAULT_IMG}
              alt={isHit ? "두더지 잡았다" : "두더지 등장"}
              className={styles.cardImage}
            />
          ) : (
            <img src={BOOM_IMG} alt="꽝" className={styles.cardImage} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Mole;
