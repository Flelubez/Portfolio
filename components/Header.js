import React, { useState, useEffect } from "react";
import styles from "../styles/header.module.css";
import { FormattedMessage } from "react-intl";
import { Slide, Zoom, Flip, Bounce, Rotate, Fade, Roll } from "react-reveal";

function Header() {


  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <Bounce right cascade duration={4500}>
          {" "}
          <h1 className={styles.h1}>Florent Lelubez</h1>
        </Bounce>
        <Bounce left cascade duration={3000}>
          <div>
            <p>
              <FormattedMessage id="header1" defaultMessage=" " />
            </p>
            <p className={styles.textImportant}>
              {" "}
              <FormattedMessage id="header2" defaultMessage=" " />
            </p>{" "}
            <p>
              <FormattedMessage id="header3" defaultMessage=" " />
            </p>
            <p className={styles.textImportant}>
              <FormattedMessage id="header4" defaultMessage=" " />
            </p>{" "}
            <p>
              <FormattedMessage id="header5" defaultMessage=" " />
            </p>
          </div>
        </Bounce>
      </div>
      <Zoom Top duration={3000}>
        <div className={styles.image}>
          <img src="/myphoto.jpg" alt="Ma photo" />
        </div>
      </Zoom>
    </div>
  );
}

export default Header;