import * as styles from "./RankingTable.css";

const RankingTable = ({ data = [] }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.th}>순위</th>
          <th className={styles.th}>레벨</th>
          <th className={styles.th}>점수</th>
          <th className={styles.th}>기록 시각</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={4} className={styles.emptyTd}>
              아직 기록이 없습니다.
            </td>
          </tr>
        ) : (
          data.map((item, index) => (
            <tr key={item.date}>
              <td className={styles.td}>{index + 1}위</td>
              <td className={styles.td}>Level {item.level}</td>
              <td className={styles.td}>{item.score}점</td>
              <td className={styles.td}>{item.date}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default RankingTable;
