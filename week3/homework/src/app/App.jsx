import { useState } from "react";

import Header from "@/shared/layout/header/Header";
import GamePage from "@/pages/game/GamePage";
import RankingPage from "@/pages/ranking/RankingPage";

import { TABS } from "@/shared/constants/tab";

import * as styles from "./App.css";

const App = () => {
  const [tab, setTab] = useState(TABS.GAME);

  return (
    <div className={styles.pageContainer}>
      <Header currentTab={tab} onTabChange={setTab} />
      {tab === TABS.GAME ? <GamePage /> : <RankingPage />}
    </div>
  );
};

export default App;
