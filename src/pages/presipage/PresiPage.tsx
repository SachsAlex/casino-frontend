import styles from "./PresiPage.module.css";
import guy from "../../mediathek/images/Carsten05b2.webp";

function PresiPage() {
  return (
    <div className={styles.background}>
      <img className={styles.guy} src={guy} alt="Typ" />
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <h2>Inhaltsverzeichnis</h2>
          <div className={styles.content}>
            <div className={styles.numberBox}>
              <label className={styles.number}>I.</label>
              <label className={styles.number}>II.</label>
              <label className={styles.number}>III.</label>
              <label className={styles.number}>IV.</label>
              <label className={styles.number}>V.</label>
              <label className={styles.number}>VI.</label>
              <label className={styles.unterpunkt}>VI.I.</label>
              <label className={styles.unterpunkt}>VI.II.</label>
              <label className={styles.unterpunkt}>VI.III.</label>
              <label className={styles.number}>VII.</label>
              <label className={styles.number}>VIII.</label>
              <label className={styles.number}>IX.</label>
              <label className={styles.number}>X.</label>
            </div>
            <div className={styles.titleBox}>
              <label className={styles.title}>Vision Casino</label>
              <label className={styles.title}>Rechtliches</label>
              <label className={styles.title}>Technologien</label>
              <label className={styles.title}>Casino Frontend</label>
              <label className={styles.title}>Casino Backend</label>
              <label className={styles.title}>Spielevorstellung</label>
              <label className={styles.unterpunkt}>BlackJack</label>
              <label className={styles.unterpunkt}>Roulette</label>
              <label className={styles.unterpunkt}>Slot Machine</label>
              <label className={styles.title}>Einbindung</label>
              <label className={styles.title}>Demonstration</label>
              <label className={styles.title}>Fragen</label>
              <label className={styles.title}>Quellenverzeichnis</label>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default PresiPage;
