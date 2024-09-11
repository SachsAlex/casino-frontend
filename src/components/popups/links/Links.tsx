import React from "react";
import { linkData } from "../../lib/LinkData";
import styles from "./Links.module.css";
import "@fontsource/tenor-sans";

function Links() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <h3>Flaticons</h3>
        <div>
          {linkData.map((item, index) => (
            <React.Fragment key={index}>
              <a key={index} href={item.href} target="_blank" rel="noreferrer">
                {item.name}
              </a>
              <br />
            </React.Fragment>
          ))}
        </div>
        <br />
        <h3>Hintergründe und Charaktere by</h3>
        <a
          href="https://create.microsoft.com/de-de/features/ai-image-generator"
          target="_blank"
          rel="noreferrer"
        >
          Microsoft Designer
        </a>
      </div>
    </div>
  );
}

export default Links;
