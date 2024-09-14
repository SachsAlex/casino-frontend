import styles from "./Blackjack.module.css";
import "@fontsource/tenor-sans";

function Blackjack() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.blackjack}>
          <h3>BlackJack Highscores</h3>
        </div>
      </div>
    </div>
  );
}

export default Blackjack;
