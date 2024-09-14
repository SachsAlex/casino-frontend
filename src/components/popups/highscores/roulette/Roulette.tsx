import styles from "./Roulette.module.css";
import "@fontsource/tenor-sans";

function Roulette() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.roulette}>
          <h3>Roulette Highscores</h3>
        </div>
      </div>
    </div>
  );
}

export default Roulette;
