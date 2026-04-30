import StatusItem from "../status-item/StatusItem";
import TimerItem from "../timer-item/TimerItem";
import { boardContainer, fullWidth } from "./StatusBoard.css";
import { TIME } from "../../constants/game";

const StatusBoard = ({
  isPlaying,
  level,
  onTimeUp,
  score,
  success,
  fail,
  message,
}) => {
  return (
    <div className={boardContainer}>
      <TimerItem
        isPlaying={isPlaying}
        initialTime={TIME[level].initialTime}
        onTimeUp={onTimeUp}
        className={fullWidth}
      />

      <StatusItem label="총 점수" className={fullWidth}>
        {score}
      </StatusItem>
      <StatusItem label="성공" status="success">
        {success}
      </StatusItem>
      <StatusItem label="실패" status="fail">
        {fail}
      </StatusItem>
      <StatusItem label="안내 메시지" type="message" className={fullWidth}>
        {message}
      </StatusItem>
    </div>
  );
};

export default StatusBoard;
