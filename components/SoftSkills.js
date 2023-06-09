import React from "react";

import { FormattedMessage } from "react-intl";

import styles from "../styles/softSkills.module.css";

import { Zoom, Roll } from "react-reveal";
import { useSelector } from "react-redux";

function SoftSkills() {
 const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={darkMode ? styles.bigcontainer : styles.bigcontainerLight}>
      <div className={styles.container}>
        <Roll top cascade duration={4000}>
          <div className={styles.skills}>
            <p>
              <FormattedMessage id="softSkills" defaultMessage="Soft Skills" />
            </p>
          </div>
        </Roll>
        <Zoom Top duration={4000}>
          <div className={darkMode? styles.gradientBg : styles.gradientBgLight}>
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
