import styles from "./Impressum.module.css";
import "@fontsource/tenor-sans";

function Impressum() {
  return (
    <div className={styles.background}>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          Willkommen ihr kleinen Idioten von Impressum :)
        </div>
      </div>
    </div>
  );
}

export default Impressum;
