import styles from "./LobbyPage.module.css";
import guy2 from "../../mediathek/images/Alex07b1.webp";
import "@fontsource/tenor-sans";
import { useNavigate } from "react-router-dom";
import slots from "../../mediathek/images/slot.webp";
import blackjack from "../../mediathek/images/karte.webp";
import roulette from "../../mediathek/images/roulette.webp";
import exit from "../../mediathek/images/ausgang.png";

// Extra Satz: Sollten Sie Hilfe (Link) benötigen, bin ich jederzeit für Sie da!

function LobbyPage() {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate("/");
  };
  return (
    <div className={styles.background}>
      <div className="">
        <img
          className={styles.blackjack}
          src={blackjack}
          alt="Icon BlackJack"
        />
      </div>
      <div className="">
        <img className={styles.slots} src={slots} alt="Icon Slot Maschine" />
      </div>
      <div className="">
        <img className={styles.roulette} src={roulette} alt="Icon Roulette" />
      </div>
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
      <div className="">
        <img
          className={styles.exit}
          src={exit}
          alt="Icon Exit"
          onClick={handleExit}
          title="Back to Main Entrance"
        />
      </div>
    </div>
  );
}

export default LobbyPage;
