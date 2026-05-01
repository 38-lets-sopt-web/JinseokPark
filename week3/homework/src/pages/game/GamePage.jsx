import { useState, useEffect, useRef } from "react";

import StatusBoard from "./components/status-board/StatusBoard";
import GameBoard from "./components/game-board/GameBoard";

import ModalPortal from "@/shared/ui/portal/ModalPortal";
import ResultModal from "./components/result-modal/ResultModal";

import { useGameBoard } from "./hooks/useGameBoard";
import { useGameState } from "./hooks/useGameState";
import { useShowMole } from "./hooks/useShowMole";

import { addData } from "@/pages/ranking/utils/storage";

import * as styles from "./GamePage.css";

const GamePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [level, setLevel] = useState(1);
  const currentSize = level + 1;
  const clickLock = useRef(false);

  const { moleData, initBoard, hitCard, popMole } = useGameBoard(currentSize);
  const { gameState, onHitSuccess, onHitFail, resetGameState } = useGameState();

  useShowMole({
    isPlaying: isPlaying,
    onShow: popMole,
  });

  const handleStart = () => {
    setIsPlaying(true);
  };

  const handleStop = () => {
    resetGameState();
    initBoard();
    setIsPlaying(false);
  };

  const handleTimeUp = () => {
    setIsPlaying(false);
    setShowModal(true);
  };

  const handleMoleClick = (mole) => {
    if (!mole.isFlipped || clickLock.current) return;

    clickLock.current = true;

    if (mole.type === "mole") onHitSuccess();
    else onHitFail();
    hitCard(mole.id);

    setTimeout(() => {
      clickLock.current = false;
    }, 600);
  };

  const handleModalClose = () => {
    const score = gameState.score;
    if (score > 0) addData({ level, score });
    setShowModal(false);
    handleStop();
  };

  const updateLevel = (e) => {
    setLevel(Number(e.target.value));
  };

  useEffect(() => {
    initBoard();
    resetGameState();
  }, [level, initBoard, resetGameState]);

  return (
    <div className={styles.pageContainer}>
      <StatusBoard
        isPlaying={isPlaying}
        level={level}
        onTimeUp={handleTimeUp}
        gameState={gameState}
      />

      <GameBoard
        level={level}
        isPlaying={isPlaying}
        currentSize={currentSize}
        moleData={moleData}
        updateLevel={updateLevel}
        handleStart={handleStart}
        handleStop={handleStop}
        handleMoleClick={handleMoleClick}
      />

      {showModal && (
        <ModalPortal>
          <ResultModal
            level={level}
            score={gameState.score}
            onCompleted={handleModalClose}
          />
        </ModalPortal>
      )}
    </div>
  );
};

export default GamePage;
