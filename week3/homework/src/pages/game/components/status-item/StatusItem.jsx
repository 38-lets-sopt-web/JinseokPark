import * as styles from "./StatusItem.css";

const StatusItem = ({ label, children, type = "number", status }) => {
  return (
    <div className={styles.itemContainer}>
      <span className={styles.label}>{label}</span>
      <div className={styles.textRecipe({ type, status })}>{children}</div>
    </div>
  );
};

export default StatusItem;
