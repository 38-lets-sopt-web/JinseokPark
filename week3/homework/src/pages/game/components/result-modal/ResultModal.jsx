import { useState, useEffect } from "react";

import * as styles from "./ResultModal.css";

const ResultModal = ({ level, score, onCompleted }) => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown <= 0) {
      clearInterval(timer);
      onCompleted?.();
    }

    return () => clearInterval(timer);
  }, [countdown, onCompleted]);

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <h2 className={styles.title}>Level {level} 게임 종료!</h2>
        <p className={styles.score}>최종 점수: {score}점</p>
        <p className={styles.resetTime}>
          <strong>{countdown}초</strong> 후 게임이 리셋됩니다...
        </p>
      </div>
    </div>
  );
};

export default ResultModal;
