import { useState, useEffect } from "react";

import StatusBoard from "./components/status-board/StatusBoard";
import MoleBoard from "./components/mole-board/MoleBoard";
import Dropdown from "@/shared/ui/dropdown/Dropdown";
import Button from "@/shared/ui/button/Button";
import ModalPortal from "@/shared/ui/portal/ModalPortal";
import ResultModal from "./components/result-modal/ResultModal";

import { useGameBoard } from "./hooks/useGameBoard";
import { useGameState } from "./hooks/useGameState";
import { useGameTimer } from "./hooks/useGameTimer";
import { useShowMole } from "./hooks/useShowMole";

import { addData } from "@/shared/utils/storage";

import { LEVEL } from "./constants/level";
import { GAME_CONFIG } from "./constants/game";

import * as styles from "./GamePage.css";

const GamePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [level, setLevel] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const currentSize = level + 1;

  const { moleData, initBoard, hitCard, popMole } = useGameBoard(currentSize);
  const { score, stats, message, onHitSuccess, onHitFail, resetGameState } =
    useGameState();

  const handleStart = () => {
    setIsPlaying(true);
  };

  const handleStop = () => {
    resetTimer();
    resetGameState();
    initBoard();
    setIsPlaying(false);
  };

  const { seconds, resetTimer } = useGameTimer({
    isActive: isPlaying,
    initialTime: GAME_CONFIG[level].INITIAL_TIME,
    onTimeUp: () => {
      setIsPlaying(false);
      setShowModal(true);
    },
  });

  useEffect(() => {
    resetTimer();
  }, [level, resetTimer]);

  useEffect(() => {
    initBoard();
    resetGameState();
  }, [currentSize, initBoard, resetGameState]);

  const updateLevel = (e) => {
    setIsPlaying(false);
    setLevel(Number(e.target.value));
  };

  const handleMoleClick = (mole) => {
    if (!mole.isFlipped) return;

    if (mole.type === "mole") {
      onHitSuccess();
    } else {
      onHitFail();
    }

    hitCard(mole.id);
  };

  useShowMole({
    isActive: isPlaying,
    onShow: popMole,
  });

  const handleModalClose = () => {
    addData({ level, score });
    setShowModal(false);
    handleStop();
  };

  return (
    <div className={styles.pageContainer}>
      <StatusBoard
        time={seconds}
        score={score}
        success={stats.success}
        fail={stats.fail}
        message={message}
      />
      <div className={styles.gameBoard}>
        <header className={styles.boardHeader}>
          <Dropdown options={LEVEL} value={level} onChange={updateLevel} />
          <div className={styles.buttonContainer}>
            <Button
              variant="gameStart"
              onClick={handleStart}
              disabled={isPlaying}
            >
              시작
            </Button>
            <Button
              variant="gameStop"
              onClick={handleStop}
              disabled={!isPlaying}
            >
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

      {showModal && (
        <ModalPortal>
          <ResultModal
            level={level}
            score={score}
            onCompleted={handleModalClose}
          />
        </ModalPortal>
      )}
    </div>
  );
};

export default GamePage;
