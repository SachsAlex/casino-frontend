import styles from "./BankPage.module.css";
import guy3 from "../../mediathek/images/Micha04b1.webp";
import "@fontsource/tenor-sans";
import { useNavigate } from "react-router-dom";
import exit from "../../mediathek/images/ausgang_1.webp";
import lobby from "../../mediathek/images/casino-chips.webp";
import Button from "../../components/common/buttons";
import { useContext } from "react";
import UserContext from "../../components/common/userContext";
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

  const handleLobby = () => {
    navigate("/lobby");
  };

  const redirectToHighscore = () => {
    navigate("/highscore");
  };
  const redirectToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className={styles.background}>
      <div className="">
        <img
          className={styles.lobby}
          src={lobby}
          alt="Icon Lobby"
          onClick={handleLobby}
          title="Go to the Lobby"
        />
      </div>
      <div className={styles.mainContainer}>
        <img className={styles.guy3} src={guy3} alt="Typ" />
        <div>
          <div className={styles.speechBubble}>
            <div className={styles.welcome}>
              <div className={styles.space}>Willkommen im VIP Bereich</div>
              <div className={styles.space}>der MCLX Bank.</div>
              <Button
                onClick={redirectToSignUp}
                text="Wollen Sie Ihre Chips speichern"
                id="1"
                className=""
              />
              <Button
                onClick={redirectToHighscore}
                text="oder Ihren Highscore einsehen?"
                id="2"
                className=""
              />
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
    </div>
  );
}

export default LobbyPage;
