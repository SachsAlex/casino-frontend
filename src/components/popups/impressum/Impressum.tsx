import styles from "./Impressum.module.css";
import "@fontsource/tenor-sans";

function Impressum() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.impressum}>
          <h2>MCLX Casino App</h2>
          <h3>Entwickler</h3>
          Michail Rigas - Frontend, Backend, Roulette
          <br />
          Carsten Jahn - Frontend, Backend, Slots
          <br />
          Alexander Sachs - Frontend, Backend, BlackJack
          <h3>Repositories</h3>
          <div className={styles.repo}>
            <a
              href="https://github.com/SachsAlex/casino-frontend"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Frontend
            </a>
            <a
              href="https://github.com/Micha3671/roulette-project-backend"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Backend
            </a>
            {/* <a href="" target="_blank" rel="noreferrer">GitHub Roulette</a>
        <a href="" target="_blank" rel="noreferrer">GitHub Slots</a>
        <a href="" target="_blank" rel="noreferrer">GitHub BlackJack</a> */}
          </div>
          <h3>Kontakte</h3>
        </div>
        <div className={styles.inline}>
          Michail Rigas{" "}
          <a
            href="https://www.linkedin.com/in/michail-rigas-08b17445"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Account
          </a>
        </div>
        <div className={styles.inline}>
          Carsten Jahn{" "}
          <a
            href="https://www.linkedin.com/in/carsten-jahn-056764105/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Account
          </a>
        </div>
        <div className={styles.inline}>
          Alexander Sachs{" "}
          <a
            href="https://www.linkedin.com/in/alexander-sachs-01a917308/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Account
          </a>
        </div>
      </div>
    </div>
  );
}

export default Impressum;
