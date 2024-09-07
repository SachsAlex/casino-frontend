import styles from "./HomePage.module.css";
import guy from "../../mediathek/images/Carsten05b2.webp";
import { useState } from "react";
import Button from "../../components/common/buttons";
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
    <div className={styles.background}>
      <div className={styles.mainContainer}>
        <img
          className={`${styles.zoom} ${bigGuy ? styles.enlarged : ""}`}
          src={guy}
          alt="Typ"
          onClick={() => onClick()}
        />
        {speechBubble && (
          <div className={styles.spacer}>
            <div className={styles.speechBubble}>
              <div className={styles.welcome}>
                <div className={styles.space}>
                  {" "}
                  Willkommen beim Casino MCLX.{" "}
                </div>
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
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
