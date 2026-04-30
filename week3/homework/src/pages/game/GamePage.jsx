import { useState, useEffect, useCallback } from "react";

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
  const [level, setLevel] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const currentSize = level + 1;

  const { moleData, initBoard, hitCard, popMole } = useGameBoard(currentSize);
  const { score, stats, message, onHitSuccess, onHitFail, resetGameState } =
    useGameState();

  const handleStart = () => {
    setIsPlaying(true);
  };

  const handleStop = useCallback(() => {
    resetGameState();
    initBoard();
    setIsPlaying(false);
  }, [resetGameState, initBoard]);

  const handleTimeUp = useCallback(() => {
    setIsPlaying(false);
    setShowModal(true);
  }, []);

  useEffect(() => {
    initBoard();
    resetGameState();
  }, [level, initBoard, resetGameState]);

  const updateLevel = useCallback((e) => {
    setLevel(Number(e.target.value));
  }, []);

  const handleMoleClick = useCallback(
    (mole) => {
      if (!mole.isFlipped) return;
      if (mole.type === "mole") onHitSuccess();
      else onHitFail();
      hitCard(mole.id);
    },
    [onHitSuccess, onHitFail, hitCard],
  );

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
        isPlaying={isPlaying}
        level={level}
        onTimeUp={handleTimeUp}
        score={score}
        success={stats.success}
        fail={stats.fail}
        message={message}
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
            score={score}
            onCompleted={handleModalClose}
          />
        </ModalPortal>
      )}
    </div>
  );
};

export default GamePage;
