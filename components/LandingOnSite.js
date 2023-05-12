import React, { useRef, useEffect, useState } from "react";

import anime from "animejs";

import styles from "../styles/landingOnSite.module.css";

import { FormattedMessage } from "react-intl";

import { Zoom } from "react-reveal";

import { useSelector } from "react-redux";

function LandingOnSite() {



  const containerRef = useRef(null);
  const [isSquareVisible, setIsSquareVisible] = useState(true);
  const [isTextVisible, setIsTextVisible] = useState(false);

  const darkMode = useSelector((state) => state.theme.darkMode);
  const language = useSelector((state) => state.language.value);

  //Setup anime.js
  useEffect(() => {
    const squareTimeline = anime.timeline({
      easing: "easeInOutSine",
      duration: 2000,
      autoplay: false,
      complete: () => setIsSquareVisible(false),
    });

    squareTimeline.add({
      targets: ".square",
      translateX: ["-50%", "-50%"],
      translateY: ["-50%", "-50%"],
      rotate: 360,
    });

    squareTimeline.add({
      targets: ".square",
      scale: [1, 20],
      opacity: [1, 0],
    });

    squareTimeline.play();
  }, []);

  //Setup 2nd animations after the first one
  useEffect(() => {
    const textTimeline = anime.timeline({
      easing: "easeInOutSine",
      duration: 2000,
    });

    textTimeline.add({
      targets: ".landingContainer h1, .landingContainer p",
      color: ["#000000", "#ffffff"],
      opacity: [0, 1],
      delay: 500,
    });

    textTimeline.play();
  }, [isTextVisible]);

  useEffect(() => {
    if (!isSquareVisible) {
      setIsTextVisible(true);
    }
  }, [isSquareVisible]);

  return (
    <div
      className={
        darkMode ? styles.landingContainer : styles.landingContainerLight
      }
      ref={containerRef}
    >
      {isSquareVisible ? (
        <>
          <div className={styles.squareContainer}>
            <div className={`${styles.square1} square`} />
            <div className={`${styles.square2} square`} />
          </div>
        </>
      ) : (
        <>
          <Zoom left cascade duration={2000}>
            <h1 className={styles.h1}>
              <div className={darkMode ? styles.title : styles.titleLight}>
                <span className={styles.contactLetter}>
                  {" "}
                  <FormattedMessage
                    id="1"
                    defaultMessage="Welcome to my portfolio"
                  />
                </span>
                <span className={styles.contactLetter}>
                  {" "}
                  <FormattedMessage id="2" defaultMessage=" " />
                </span>
                <span className={styles.contactLetter}>
                  {" "}
                  <FormattedMessage id="3" defaultMessage=" " />
                </span>
                <span className={styles.contactLetter}>
                  {" "}
                  <FormattedMessage id="4" defaultMessage=" " />
                </span>
                <span className={styles.contactLetter}>
                  {" "}
                  <FormattedMessage id="5" defaultMessage=" " />
                </span>
                <span className={styles.contactLetter}>
                  {" "}
                  <FormattedMessage id="6" defaultMessage=" " />
                </span>
                <span className={styles.contactLetter}>
                  <FormattedMessage id="7" defaultMessage=" " />
                </span>
                {language === "en" && <span>&nbsp;</span>}
                <span className={styles.contactLetter}>
                  <FormattedMessage id="8" defaultMessage=" " />
                </span>
                <span className={styles.contactLetter}>
                  {" "}
                  <FormattedMessage id="9" defaultMessage=" " />
                </span>
                {language === "fr" && <span>&nbsp;</span>}
                {language === "en" && <span>&nbsp;</span>}
                <span className={styles.contactLetter}>
                  {" "}
                  <FormattedMessage id="10" defaultMessage=" " />
                </span>
                <span className={styles.contactLetter}>
                  {" "}
                  <FormattedMessage id="11" defaultMessage=" " />
                </span>
                {language === "en" && <span>&nbsp;</span>}
                <span
                  className={language === "en" ? styles.nowrap : styles.none}
                >
                  <span className={styles.contactLetter}>
                    <FormattedMessage id="12" defaultMessage=" " />
                  </span>
                  <span className={styles.contactLetter}>
                    <FormattedMessage id="13" defaultMessage=" " />
                  </span>
                  <span
                    className={language === "fr" ? styles.nowrap : styles.none}
                  >
                    {language === "fr" && <span>&nbsp;</span>}
                    <span className={styles.contactLetter}>
                      {" "}
                      <FormattedMessage id="14" defaultMessage=" " />
                    </span>
                    <span className={styles.contactLetter}>
                      {" "}
                      <FormattedMessage id="15" defaultMessage=" " />
                    </span>
                    <span className={styles.contactLetter}>
                      {" "}
                      <FormattedMessage id="16" defaultMessage=" " />
                    </span>
                  </span>
                  {language === "fr" && <span>&nbsp;</span>}
                  <span className={styles.contactLetter}>
                    {" "}
                    <FormattedMessage id="17" defaultMessage=" " />
                  </span>
                  <span className={styles.contactLetter}>
                    {" "}
                    <FormattedMessage id="18" defaultMessage=" " />
                  </span>
                  <span className={styles.contactLetter}>
                    {" "}
                    <FormattedMessage id="19" defaultMessage=" " />
                  </span>
                  <span className={styles.contactLetter}>
                    {" "}
                    <FormattedMessage id="20" defaultMessage=" " />
                  </span>
                  <span className={styles.contactLetter}>
                    {" "}
                    <FormattedMessage id="21" defaultMessage=" " />
                  </span>
                </span>
                <span className={styles.contactLetter}>
                  {" "}
                  <FormattedMessage id="22" defaultMessage=" " />
                </span>
                <span className={styles.contactLetter}>
                  {" "}
                  <FormattedMessage id="23" defaultMessage=" " />
                </span>
                <span className={styles.contactLetter}>
                  {" "}
                  <FormattedMessage id="24" defaultMessage=" " />
                  <span className={styles.contactLetter}>
                    {" "}
                    <FormattedMessage id="25" defaultMessage=" " />
                  </span>
                  <span className={styles.contactLetter}>
                    {" "}
                    <FormattedMessage id="26" defaultMessage=" " />
                  </span>
                </span>
              </div>
            </h1>
          </Zoom>
          <Zoom bottom cascade duration={6000}>
            <div className={darkMode ? styles.title : styles.titleLight}>
              <span className={styles.contactLetter}>
                {" "}
                <FormattedMessage id="proud" defaultMessage="I'm proud" />
              </span>
              <span> </span>
              <span className={styles.contactLetter}>
                {" "}
                <FormattedMessage id="present" defaultMessage="to showcase" />
              </span>
              <span> </span>
              <span className={styles.contactLetter}>
                {" "}
                <FormattedMessage id="work" defaultMessage="my work here" />
              </span>
              <span> </span>
              <span className={styles.contactLetter}>
                {" "}
                <FormattedMessage id="hope" defaultMessage="and I hope" />
              </span>
              <span> </span>
              <br />
              <span className={styles.contactLetter}>
                {" "}
                <FormattedMessage id="find" defaultMessage="you find" />
              </span>
              <span> </span>
              <span className={styles.contactLetter}>
                {" "}
                <FormattedMessage id="inspire" defaultMessage="it inspiring" />
              </span>
              <span className={styles.contactLetter}>.</span>
            </div>
          </Zoom>
        </>
      )}
    </div>
  );
}

export default LandingOnSite;
