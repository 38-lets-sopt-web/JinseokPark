import * as styles from "./Dropdown.css";

const Dropdown = ({ options, value, onChange, allowAll = false }) => {
  return (
    <select className={styles.selectBox} value={value} onChange={onChange}>
      {allowAll && <option value="all">전체</option>}

      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
