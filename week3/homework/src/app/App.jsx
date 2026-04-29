import * as styles from "./App.css";
import Header from "@/shared/layout/header/Header";
import GamePage from "@/pages/game/GamePage";

const App = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <GamePage />
    </div>
  );
};

export default App;
