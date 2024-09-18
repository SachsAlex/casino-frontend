import { useContext, useEffect, useState } from "react";
import styles from "./Slots.module.css";
import "@fontsource/tenor-sans";
import UserContext from "../../../common/userContext";
import { HighscoreQueries } from "../../../../api/v1/highscore";
import { AxiosError } from "axios";

function Slots() {
  const { user } = useContext(UserContext);
  const gameId = 3;
  const [top5Array, setTop5Array] = useState<any[]>([]);

  const top5 = async () => {
    try {
      if (!user) return;
      const score = await HighscoreQueries.fetchTop5(user.id, gameId);
      setTop5Array(score);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Fehler bei fetchTop5: ", error.message);
      } else {
        console.error("Unbekannter Fehler bei fetchTop5: ", error);
      }
    }
  };

  useEffect(() => {
    top5();
  }, []);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.slots}>
          <h3>Slot-Machine Highscores</h3>
          {top5Array.map((item, index) => (
            <h5
              key={index}
              className={styles[`score${index}`]}
            >{`${index + 1}. ${item.highscore}`}</h5>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slots;
