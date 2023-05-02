import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "../styles/softSkills.module.css";
import { Slide, Zoom, Flip, Bounce, Rotate, Fade, Roll } from "react-reveal";

function SoftSkills() {

  return (
    <div className={styles.bigcontainer}>
      <div className={styles.container}>
        <Roll top cascade duration={4000}>
          <div className={styles.skills}>
            <p>
              <FormattedMessage id="softSkills" defaultMessage="Soft Skills" />
            </p>
          </div>
        </Roll>
        <Zoom Top duration={4000}>
          <div className={styles.gradientBg}>
            <img
              className={styles.softSkillsImage}
              src="/CloudBgTransparent.png"
              alt="Soft Skills"
            />
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default SoftSkills;
