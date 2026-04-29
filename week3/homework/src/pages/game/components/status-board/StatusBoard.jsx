import StatusItem from "../status-item/StatusItem";
import { boardContainer, fullWidth } from "./StatusBoard.css";

const StatusBoard = ({ time, score, success, fail, message }) => {
  return (
    <div className={boardContainer}>
      <StatusItem label="남은 시간" className={fullWidth}>
        {time}
      </StatusItem>
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
