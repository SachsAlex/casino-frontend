import styles from "./LobbyPage.module.css";
import guy2 from "../../mediathek/images/Alex07b1.webp";
import "@fontsource/tenor-sans";
import { useNavigate } from "react-router-dom";
import slots from "../../mediathek/images/slot.webp";
import blackjack from "../../mediathek/images/karte.webp";
import roulette from "../../mediathek/images/roulette.webp";
import exit from "../../mediathek/images/ausgang_1.webp";
import bank from "../../mediathek/images/casino-chip.webp";
import help from "../../mediathek/images/hilfe.webp";
import UserContext from "../../components/common/userContext";
import { useContext } from "react";
import { AxiosError } from "axios";

// Extra Satz: Sollten Sie Hilfe (Link) benötigen, bin ich jederzeit für Sie da!

function LobbyPage() {
  const navigate = useNavigate();
  const { logOutUser } = useContext(UserContext);

  const handleLogout = async (e: any) => {
    e.preventDefault();
    try {
      await logOutUser();
      console.log("User wurder erfolgreich ausgeloggt");
      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Fehler beim Ausloggen:", error.message);
      } else {
        console.error("Unbekannter Fehler beim Ausloggen:", error);
      }
    }
  };

  const handleBank = () => {
    navigate("/bank");
  };

  const handleHelp = () => {
    navigate("/help");
  };

  const handleBlackJack = () => {
    navigate("/blackjack");
  };

  return (
    <div className={styles.background}>
      <div className="">
        <img
          className={styles.bank}
          src={bank}
          alt="Icon Bank"
          onClick={handleBank}
          title="Go to the Cashier"
        />
      </div>
      <div className="">
        <img
          className={styles.blackjack}
          src={blackjack}
          alt="Icon BlackJack"
          onClick={handleBlackJack}
          title="Go to the BlackJack"
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
              <div className={styles.space}> Willkommen im Casino MCLX. </div>
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
          onClick={handleLogout}
          title="Back to Main Entrance"
        />
      </div>
      <div className="">
        <img
          className={styles.help}
          src={help}
          alt="Icon Help"
          onClick={handleHelp}
          title="Go to get Help"
        />
      </div>
    </div>
  );
}

export default LobbyPage;
