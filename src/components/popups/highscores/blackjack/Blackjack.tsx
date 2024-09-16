import styles from "./Blackjack.module.css";
import "@fontsource/tenor-sans";

function Blackjack() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.blackjack}>
          <h3>BlackJack Highscores</h3>
          <h5 className={styles.topscore}>5.000 Punkte</h5>
          <h5 className={styles.second}>500 Punkte</h5>
          <h5 className={styles.third}>50 Punkte</h5>
          <h5 className={styles.forth}>5 Punkte</h5>
          <h5 className={styles.fifth}>0 Punkte</h5>
        </div>
      </div>
    </div>
  );
}

export default Blackjack;
