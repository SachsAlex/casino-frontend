import styles from "./HomePage.module.css";
import guy from "../../mediathek/images/[removal.ai]_49894e9d-3c96-47f6-8cab-c61a0955949b-_07e49ec1-e963-4d2e-9c35-771ebe298fd8b2.png";
import { useState } from "react";
import Button from "../../components/common/buttons";

function HomePage() {
  const [speechBubble, setSpeechBubble] = useState(false);

  function onClick() {
    setSpeechBubble(!speechBubble);
    console.log("Hallo" + speechBubble);
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
          <h1>Hallo Welt</h1>
        </div>
        // <Button onClick={onClick} text="Hallo Welt" id="1" className="" />
      )}
    </div>
  );
}

export default HomePage;
