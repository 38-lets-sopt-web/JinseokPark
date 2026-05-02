import * as styles from "./Dropdown.css";

const Dropdown = ({
  options,
  value,
  onChange,
  allowAll = false,
  disabled = false,
}) => {
  return (
    <select
      className={styles.selectBox}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      {allowAll && <option value="all">전체</option>}

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
