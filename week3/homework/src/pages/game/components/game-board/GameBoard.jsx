import Dropdown from "@/shared/ui/dropdown/Dropdown";
import Button from "@/shared/ui/button/Button";
import MoleBoard from "../mole-board/MoleBoard";

import { LEVEL } from "../../constants/game";

import * as styles from "./GameBoard.css";

const GameBoard = ({
  level,
  moleData,
  updateLevel,
  isPlaying,
  handleStart,
  handleStop,
  handleMoleClick,
  currentSize,
}) => {
  return (
    <div className={styles.gameBoard}>
      <header className={styles.boardHeader}>
        <Dropdown
          options={LEVEL}
          value={level}
          onChange={updateLevel}
          disabled={isPlaying}
        />
        <div className={styles.buttonContainer}>
          <Button
            variant="gameStart"
            onClick={handleStart}
            disabled={isPlaying}
          >
            시작
          </Button>
          <Button variant="gameStop" onClick={handleStop} disabled={!isPlaying}>
            중단
          </Button>
        </div>
      </header>
      <MoleBoard
        size={currentSize}
        moleData={moleData}
        onMoleClick={handleMoleClick}
      />
    </div>
  );
};

export default GameBoard;
