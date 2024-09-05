import styles from "./LobbyPage.module.css";
import guy2 from "../../mediathek/images/Carsten05b2.webp";
import "@fontsource/tenor-sans";

function LobbyPage() {
  return (
    <div className={styles.background}>
      <div className={styles.mainContainer}>
        <img className={styles.guy2} src={guy2} alt="Typ" />
        <div className={styles.speechBubble}>
          <div className={styles.welcome}>
            <div className={styles.space}> Willkommen beim Casino MCXL. </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LobbyPage;
