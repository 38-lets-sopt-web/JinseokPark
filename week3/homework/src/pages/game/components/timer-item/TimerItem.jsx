import { useEffect } from "react";

import StatusItem from "../status-item/StatusItem";

import { useGameTimer } from "../../hooks/useGameTimer";

const TimerItem = ({ isPlaying, initialTime, onTimeUp, className }) => {
  const { seconds, resetTimer } = useGameTimer({
    isActive: isPlaying,
    initialTime,
    onTimeUp,
  });

  useEffect(() => {
    if (!isPlaying) {
      resetTimer();
    }
  }, [isPlaying, resetTimer]);

  return (
    <StatusItem label="남은 시간" className={className}>
      {seconds}
    </StatusItem>
  );
};

export default TimerItem;
