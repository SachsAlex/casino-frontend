import styles from "./HomePage.module.css";
import guy from "../../mediathek/images/[removal.ai]_49894e9d-3c96-47f6-8cab-c61a0955949b-_07e49ec1-e963-4d2e-9c35-771ebe298fd8b2.png";
import { useState } from "react";
import Button from "../../components/common/buttons";
import "@fontsource/tenor-sans";

function HomePage() {
  const [speechBubble, setSpeechBubble] = useState(false);

  function onClick() {
    setSpeechBubble(!speechBubble);
  }

  return (
    <div className={styles.mainContainer}>
      <img
        className={styles.zoom}
        src={guy}
        alt="Typ"
        onClick={() => onClick()}
      />
      {speechBubble && (
        <div className={styles.speechBubble}>
          <div className={styles.welcome}>
            Willkommen beim Casino MCXL.
            <div>
              Bitte zeigen Sie Ihren Ausweis (
              <Button onClick={onClick} text="SignUp" id="1" className="" />)
              <div>
                oder Ihre Mitgliedskarte (
                <Button onClick={onClick} text="LogIn" id="2" className="" />
                ).
              </div>
            </div>
          </div>
        </div>
        // <Button onClick={onClick} text="Hallo Welt" id="1" className="" />
      )}
    </div>
  );
}

export default HomePage;
