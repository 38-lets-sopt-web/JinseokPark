import clsx from "clsx";

import * as styles from "./StatusItem.css";

const StatusItem = ({
  label,
  children,
  type = "number",
  status,
  className,
}) => {
  return (
    <div className={clsx(styles.itemContainer, className)}>
      <span className={styles.label}>{label}</span>
      <div className={styles.textRecipe({ type, status })}>{children}</div>
    </div>
  );
};

export default StatusItem;
