import StatusItem from "../status-item/StatusItem";
import TimerItem from "../timer-item/TimerItem";

import { TIME } from "../../constants/game";

import * as styles from "./StatusBoard.css";

const StatusBoard = ({ isPlaying, level, onTimeUp, gameState }) => {
  return (
    <div className={styles.boardContainer}>
      <TimerItem
        isPlaying={isPlaying}
        initialTime={TIME[level].initialTime}
        onTimeUp={onTimeUp}
        className={styles.fullWidth}
      />

      <StatusItem label="총 점수" className={styles.fullWidth}>
        {gameState.score}
      </StatusItem>
      <StatusItem label="성공" status="success">
        {gameState.stats.success}
      </StatusItem>
      <StatusItem label="실패" status="fail">
        {gameState.stats.fail}
      </StatusItem>
      <StatusItem
        label="안내 메시지"
        type="message"
        className={styles.fullWidth}
      >
        {gameState.message}
      </StatusItem>
    </div>
  );
};

export default StatusBoard;
