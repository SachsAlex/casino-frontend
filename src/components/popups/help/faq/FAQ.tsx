import styles from "./FAQ.module.css";
import "@fontsource/tenor-sans";

function FAQ() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.faq}>
          <div className={styles.fragen}>F: Muss ich Token kaufen?</div>
          <div className={styles.antworten}>
            A: Nein, 100 Token werden immer von unserer Bank gestellt.
          </div>
          <div className={styles.fragen}>
            F: Kann ich Token gegen etwas eintauschen, wie Geld?
          </div>
          <div className={styles.antworten}>
            {" "}
            A: Nein, die Token zählen nur als persönlicher Highscore.{" "}
          </div>
          <div className={styles.fragen}>
            F: Haben die Token irgendeinen sonstigen Wert?
          </div>
          <div className={styles.antworten}>
            {" "}
            A: Nein, sie dienen lediglich zur Darstellung eines virtuellen
            Punktestandes.{" "}
          </div>
          <div className={styles.fragen}>
            F: Ist die Nutzung der App kostenlos?
          </div>
          <div className={styles.antworten}>
            {" "}
            A: Ja, Nutzern fallen keine Kosten an.{" "}
          </div>
          <div className={styles.fragen}>
            F: Da, die Währung keinen monetarischen Wert hat, sind die Spiele
            Glücksspiele?
          </div>
          <div className={styles.antworten}>
            {" "}
            A: Laut rechtsanwältlichen Beistand gelten die Spiele nicht als
            Glücksspiele. (Unentgeltlich für alle Parteien){" "}
          </div>
          <div className={styles.fragen}>F: Sind da Apps Open-Source?</div>
          <div className={styles.antworten}>
            {" "}
            A: Ja, alle Apps sind Open-Source und die Repositories sind im
            Impressum zu finden.
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
