import * as styles from "./Button.css";

const Button = ({ children, variant, onClick, ...props }) => {
  return (
    <button
      className={styles.buttonRecipe({ variant })}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
