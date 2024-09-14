import styles from "./HelpPage.module.css";
import "@fontsource/tenor-sans";
import { useNavigate } from "react-router-dom";
import lobby from "../../mediathek/images/casino-chips.webp";
import faq from "../../mediathek/images/haufig-gestellte-fragen.webp";
import impressum from "../../mediathek/images/die-info.webp";
import links from "../../mediathek/images/verknupfung.webp";
import Popup from "reactjs-popup";
import Links from "../../components/popups/help/links";
import Impressum from "../../components/popups/help/impressum";
import FAQ from "../../components/popups/help/faq";

function HelpPage() {
  const navigate = useNavigate();

  const handleLobby = () => {
    navigate("/lobby");
  };

  return (
    <div>
      <div className="">
        <img
          className={styles.lobby}
          src={lobby}
          alt="Icon Lobby"
          onClick={handleLobby}
          title="Go back to the Lobby"
        />
      </div>
      <div className={styles.background}>
        <div className={styles.outerContainer}>
          <div className={styles.innerContainer}>
            <div className={styles.containerItem}>
              <Popup
                trigger={
                  <img
                    className={styles.faq}
                    src={faq}
                    alt="Icon FAQ"
                    title="Open FAQs"
                  />
                }
              >
                <FAQ />
              </Popup>
            </div>
            <div className={styles.containerItem}>
              <Popup
                trigger={
                  <img
                    className={styles.impressum}
                    src={impressum}
                    alt="Icon Impressum"
                    title="Open Impressum"
                  />
                }
              >
                <Impressum />
              </Popup>
            </div>
            <div className={styles.containerItem}>
              <Popup
                trigger={
                  <img
                    className={styles.links}
                    src={links}
                    alt="Icon Links"
                    title="Open Links and Sources"
                  />
                }
              >
                <Links />
              </Popup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpPage;
