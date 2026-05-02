import Button from "@/shared/ui/button/button";

import { TABS } from "@/shared/constants/tab";

import * as styles from "./Header.css";

const Header = ({ currentTab, onTabChange }) => {
  const handleTabClick = (targetTab) => {
    if (currentTab === targetTab) return;
    onTabChange(targetTab);
  };

  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.title}>두더지 게임</h1>
      <div className={styles.buttonContainer}>
        <Button onClick={() => handleTabClick(TABS.GAME)}>게임</Button>
        <Button variant="ranking" onClick={() => handleTabClick(TABS.RANKING)}>
          랭킹
        </Button>
      </div>
    </header>
  );
};

export default Header;
