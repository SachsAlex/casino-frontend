import styles from "./Roulette.module.css";
import "@fontsource/tenor-sans";

function Roulette() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.roulette}>
          <h3>Roulette Highscores</h3>
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

export default Roulette;
