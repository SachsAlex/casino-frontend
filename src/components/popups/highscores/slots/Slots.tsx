import styles from "./Slots.module.css";
import "@fontsource/tenor-sans";

function Slots() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.slots}>
          <h3>Slot-Machine Highscores</h3>
        </div>
      </div>
    </div>
  );
}

export default Slots;
