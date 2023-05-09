import React, { useState, useEffect } from "react";
import BeOnTime from "./projects/BeOnTime";
import BeOnTimeDescription from "./projects/BeOnTimeDescription";
import NetFlixCopy from "./projects/NetFlixCopy";
import NetFlixCopyDescription from "./projects/NetFlixCopyDescription";
import styles from "../styles/myProjects.module.css";
import HearthstoneDescription from "./projects/HearthstoneDescription";
import Hearthstone from "./projects/Hearthstone";
import IaVolleyDescription from "./projects/IaVolleyDescription";
import IaVolley from "./projects/IaVolley";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";


function MyProjects() {
  const [isVisible, setIsVisible] = useState(false);
  
  const darkMode = useSelector((state) => state.theme.darkMode);

  
const onScroll = () => {
  const myProjectsElement = document.querySelector(`.${styles.myProjects}`);
  if (myProjectsElement) {
    const { top, bottom } = myProjectsElement.getBoundingClientRect();
    if (top <= window.innerHeight && bottom >= 0) {
      setIsVisible(true);
      window.removeEventListener("scroll", onScroll);
    }
  }
};


  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  

  return (
    <div className={styles.container}>
      <div className={`${styles.myProjects} ${darkMode ? '' : styles.myProjectsLight}`}>
        {isVisible && (
          <>
            <span className={styles.letter} style={{ animationDelay: "0s" }}>
              <FormattedMessage id="101" defaultMessage="My Projects" />
            </span>
            <span className={styles.letter} style={{ animationDelay: "0.4s" }}>
              <FormattedMessage id="102" defaultMessage=" " />
            </span>
            <span className={styles.letter} style={{ animationDelay: "0.2s" }}>
              &nbsp;
            </span>
            <span className={styles.letter} style={{ animationDelay: "0.8s" }}>
              <FormattedMessage id="103" defaultMessage=" " />
            </span>
            <span className={styles.letter} style={{ animationDelay: "0.6s" }}>
              <FormattedMessage id="104" defaultMessage=" " />
            </span>
            <span className={styles.letter} style={{ animationDelay: "1.2s" }}>
              <FormattedMessage id="105" defaultMessage=" " />
            </span>
            <span className={styles.letter} style={{ animationDelay: "1.0s" }}>
              <FormattedMessage id="106" defaultMessage=" " />
            </span>
            <span className={styles.letter} style={{ animationDelay: "1.6s" }}>
              <FormattedMessage id="107" defaultMessage=" " />
            </span>
            <span className={styles.letter} style={{ animationDelay: "1.4s" }}>
              <FormattedMessage id="108" defaultMessage=" " />
            </span>
            <span className={styles.letter} style={{ animationDelay: "2s" }}>
              <FormattedMessage id="109" defaultMessage=" " />
            </span>
            <span className={styles.letter} style={{ animationDelay: "1.8s" }}>
              <FormattedMessage id="110" defaultMessage=" " />
            </span>
          </>
        )}
      </div>
      <div className={styles.firstContainer}>
        <div
          className={`${styles.textBeOnTime} ${styles.descriptionContainer}`}
        >
          <NetFlixCopyDescription />
        </div>
        <div className={`${styles.imagesBeOnTime} ${styles.imageContainer}`}>
          <NetFlixCopy />
        </div>
      </div>
      <div id="my-projects2" className={darkMode ? styles.beOnTimeContainer : styles.beOnTimeContainerLight}>
        <div
          className={`${styles.textBeOnTime} ${styles.descriptionContainer}`}
        >
          <BeOnTimeDescription />
        </div>
        <div className={`${styles.imagesBeOnTime} ${styles.imageContainer}`}>
          <BeOnTime />
        </div>
      </div>
      <div id="my-projects3" className={styles.netflixCopyContainer}>
        <div
          className={`${styles.textBeOnTime} ${styles.descriptionContainer}`}
        >
          <HearthstoneDescription />
        </div>
        <div className={`${styles.imagesBeOnTime} ${styles.imageContainer}`}>
          <Hearthstone />
        </div>
      </div>
      <div id="my-projects4" className={darkMode ? styles.iaVolleyContainer : styles.iaVolleyContainerLight}>
        <div
          className={`${styles.textBeOnTime} ${styles.descriptionContainer}`}
        >
          <IaVolleyDescription />
        </div>
        <div className={`${styles.imagesBeOnTime} ${styles.imageContainer}`}>
          <IaVolley />
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
