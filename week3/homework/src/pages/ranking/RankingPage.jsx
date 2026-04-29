import { useState } from "react";

import Button from "@/shared/ui/button/Button";
import RankingTable from "./components/ranking-table/RankingTable";

import { getData, setData } from "@/pages/ranking/utils/storage";

import * as styles from "./RankingPage.css";

const RankingPage = () => {
  const [rankings, setRankings] = useState(() => {
    return getData();
  });

  const handleReset = () => {
    if (window.confirm("모든 기록을 삭제하시겠습니까?")) {
      setData([]);
      setRankings([]);
    }
  };

  return (
    <div className={styles.rankingBoard}>
      <header className={styles.boardHeader}>
        <h2 className={styles.title}>랭킹 보드</h2>
        <Button variant="ranking" onClick={handleReset}>
          기록 초기화
        </Button>
      </header>
      <RankingTable data={rankings} />
    </div>
  );
};

export default RankingPage;
