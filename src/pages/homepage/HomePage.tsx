import styles from "./HomePage.module.css";
import guy from "../../mediathek/images/[removal.ai]_49894e9d-3c96-47f6-8cab-c61a0955949b-_07e49ec1-e963-4d2e-9c35-771ebe298fd8b2.png";
import { useState } from "react";
import Button from "../../components/common/buttons";
import "@fontsource/tenor-sans";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [speechBubble, setSpeechBubble] = useState(false);
  const [bigGuy, setBigGuy] = useState(false);

  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate("/login");
  };
  const redirectToSignUp = () => {
    navigate("/signup");
  };

  function onClick() {
    setSpeechBubble(!speechBubble);
    setBigGuy(!bigGuy);
  }

  return (
    <div className={styles.mainContainer}>
      <img
        className={`${styles.zoom} ${bigGuy ? styles.enlarged : ""}`}
        src={guy}
        alt="Typ"
        onClick={() => onClick()}
      />
      {speechBubble && (
        <div className={styles.speechBubble}>
          <div className={styles.welcome}>
            Willkommen beim Casino MCXL.
            <Button
              onClick={redirectToSignUp}
              text="Bitte zeigen Sie Ihren Ausweis (SignUp)"
              id="1"
              className=""
            />
            <Button
              onClick={redirectToLogin}
              text="oder Ihre Mitgliedskarte (LogIn)."
              id="2"
              className=""
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
