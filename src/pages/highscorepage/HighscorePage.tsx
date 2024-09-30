import styles from "./HighscorePage.module.css";
import "@fontsource/tenor-sans";
import { useNavigate } from "react-router-dom";
import bank from "../../mediathek/images/casino-chip.webp";
import Popup from "reactjs-popup";
import Blackjack from "../../components/popups/highscores/blackjack";
import Slots from "../../components/popups/highscores/slots";
import Roulette from "../../components/popups/highscores/roulette";
import hsbj from "../../mediathek/images/karte.webp";
import hssl from "../../mediathek/images/slot.webp";
import hsro from "../../mediathek/images/roulette.webp";

function HighscorePage() {
  const navigate = useNavigate();

  const handleBank = () => {
    navigate("/bank");
  };

  return (
    <div>
      <div className="">
        <img
          className={styles.bank}
          src={bank}
          alt="Icon Bank"
          onClick={handleBank}
          title="Go back to the Bank"
        />
      </div>
      <div className={styles.background}>
        <div className={styles.outerContainer}>
          <div className={styles.innerContainer}>
            <div className={styles.containerItem}>
              <Popup
                trigger={
                  <img
                    className={styles.hsblackjack}
                    src={hsbj}
                    alt="Icon BlackJack"
                    title="Open BlackJack Highscore"
                  />
                }
              >
                <Blackjack />
              </Popup>
            </div>
            <div className={styles.containerItem}>
              <Popup
                trigger={
                  <img
                    className={styles.hsslots}
                    src={hssl}
                    alt="Icon Slots"
                    title="Open Slots Highscore"
                  />
                }
              >
                <Slots />
              </Popup>
            </div>
            <div className={styles.containerItem}>
              <Popup
                trigger={
                  <img
                    className={styles.hsroulette}
                    src={hsro}
                    alt="Icon Roulette"
                    title="Open Roulette Highscore"
                  />
                }
              >
                <Roulette />
              </Popup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighscorePage;
