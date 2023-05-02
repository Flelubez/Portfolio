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

function MyProjects() {
  const [isVisible, setIsVisible] = useState(false);
  

  const onScroll = () => {
    const myProjectsElement = document.querySelector(`.${styles.myProjects}`);
    const { top, bottom } = myProjectsElement.getBoundingClientRect();
    if (top <= window.innerHeight && bottom >= 0) {
      setIsVisible(true);
      window.removeEventListener("scroll", onScroll);
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
      <div className={styles.myProjects}>
        {isVisible && (
          <>
            <span className={styles.letter} style={{ animationDelay: "0s" }}>
              M
            </span>
            <span className={styles.letter} style={{ animationDelay: "0.4s" }}>
              y
            </span>
            <span className={styles.letter} style={{ animationDelay: "0.2s" }}>
              &nbsp;
            </span>
            <span className={styles.letter} style={{ animationDelay: "0.8s" }}>
              P
            </span>
            <span className={styles.letter} style={{ animationDelay: "0.6s" }}>
              r
            </span>
            <span className={styles.letter} style={{ animationDelay: "1.2s" }}>
              o
            </span>
            <span className={styles.letter} style={{ animationDelay: "1.0s" }}>
              j
            </span>
            <span className={styles.letter} style={{ animationDelay: "1.6s" }}>
              e
            </span>
            <span className={styles.letter} style={{ animationDelay: "1.4s" }}>
              c
            </span>
            <span className={styles.letter} style={{ animationDelay: "2s" }}>
              t
            </span>
            <span className={styles.letter} style={{ animationDelay: "1.8s" }}>
              s
            </span>
          </>
        )}
      </div>
      <div className={styles.netflixCopyContainer}>
        <div
          className={`${styles.textBeOnTime} ${styles.descriptionContainer}`}
        >
          <NetFlixCopyDescription />
        </div>
        <div className={`${styles.imagesBeOnTime} ${styles.imageContainer}`}>
          <NetFlixCopy />
        </div>
      </div>
      <div id="my-projects2" className={styles.beOnTimeContainer}>
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
      <div id="my-projects4" className={styles.beOnTimeContainer}>
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
