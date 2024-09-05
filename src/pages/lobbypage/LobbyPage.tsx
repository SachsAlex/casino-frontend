import styles from "./LobbyPage.module.css";
import guy2 from "../../mediathek/images/Alex07b1.webp";
import "@fontsource/tenor-sans";

function LobbyPage() {
  return (
    <div className={styles.background}>
      <div className={styles.mainContainer}>
        <img className={styles.guy2} src={guy2} alt="Typ" />
        <div>
          <div className={styles.speechBubble}>
            <div className={styles.welcome}>
              <div className={styles.space}> Willkommen im Casino MCXL. </div>
              <div className={styles.space}>
                Was ist Ihr Spiel am heutigen Abend?
              </div>
              <div className={styles.space}>
                Wir haben Roulette genau vor Ihnen,
              </div>
              <div className={styles.space}>BlackJack zu Ihrer Linken</div>
              <div className={styles.space}>
                und Slot Maschinen mit Aussicht.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LobbyPage;
