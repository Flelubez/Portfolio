import React from "react";

import styles from "../styles/header.module.css";

import { FormattedMessage } from "react-intl";

import { Zoom, Bounce } from "react-reveal";


function Header() {

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <Bounce right cascade duration={3500}>
          {" "}
          <h1 className={styles.h1}>
            <div>Florent&nbsp;</div>
            <div> Lelubez</div>
          </h1>
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
