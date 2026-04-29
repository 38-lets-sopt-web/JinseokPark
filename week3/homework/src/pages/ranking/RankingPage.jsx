import Button from "@/shared/ui/button/Button";
import RankingTable from "./components/ranking-table/RankingTable";

import * as styles from "./RankingPage.css";

const RankingPage = () => {
  return (
    <div className={styles.rankingBoard}>
      <header className={styles.boardHeader}>
        <h2 className={styles.title}>랭킹 보드</h2>
        <Button variant="ranking">기록 초기화</Button>
      </header>
      <RankingTable />
    </div>
  );
};

export default RankingPage;
