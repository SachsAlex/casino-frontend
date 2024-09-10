import React from "react";
import { linkData } from "../../lib/LinkData";
import styles from "./Links.module.css";
import "@fontsource/tenor-sans";

function Links() {
  return (
    <div className={styles.background}>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          Flaticons___
          <div>
            {linkData.map((item, index) => (
              <React.Fragment key={index}>
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.name}
                </a>
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;
