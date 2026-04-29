import { useState } from "react";

import Header from "@/shared/layout/header/Header";
import GamePage from "@/pages/game/GamePage";
import RankingPage from "@/pages/ranking/RankingPage";

import * as styles from "./App.css";

const App = () => {
  const [tab, setTab] = useState("game");

  return (
    <div className={styles.pageContainer}>
      <Header currentTab={tab} onTabChange={setTab} />
      {tab === "game" ? <GamePage /> : <RankingPage />}
    </div>
  );
};

export default App;
