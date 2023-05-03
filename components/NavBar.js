import React from "react";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/navBar.module.css";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../reducers/language";

function NavBar({ updateSectionIndex }) {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.language.value);

  const handleLocaleChange = (event) => {
    const selectedLocale = event.target.value;
    dispatch(setLanguage(selectedLocale));
  };

  const handleClick = (event, targetId, newIndex) => {
    event.preventDefault();
    const target = document.querySelector(targetId);
    const offset = target.offsetTop - 80;
    window.scrollTo({ top: offset, behavior: "smooth" });

    updateSectionIndex(newIndex);
  };

  const handleKeyDown = (event, targetId, newIndex) => {
    if (event.keyCode === 32) {
      // code for space key
      event.preventDefault();
      const target = document.querySelector(targetId);
      const offset = target.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });

      updateSectionIndex(newIndex);
    }
  };

  // Mettez à jour les appels à handleKeyDown pour inclure l'index de la section

  return (
    <div
      className={styles.container}
      style={{ position: "fixed", top: 0, zIndex: 100 }}
    >
      <div className={styles.links}>
        <a
          onClick={(e) => handleClick(e, "#about-me", 1)}
          onKeyDown={(e) => handleKeyDown(e, "#about-me")}
          className={styles.navitems}
          tabIndex={0}
        >
          <FormattedMessage id="navAbout" defaultMessage="About" />
        </a>
        <a
          onClick={(e) => handleClick(e, "#skills", 2)}
          onKeyDown={(e) => handleKeyDown(e, "#skills")}
          className={styles.navitems}
          tabIndex={0}
        >
          <FormattedMessage id="navSkills" defaultMessage="Skills" />
        </a>
        <a
          onClick={(e) => handleClick(e, "#my-projects", 3)}
          onKeyDown={(e) => handleKeyDown(e, "#my-projects")}
          className={styles.navitems}
          tabIndex={0}
        >
          <FormattedMessage id="navProjects" defaultMessage="Projects" />
        </a>
        <a
          onClick={(e) => handleClick(e, "#contact", 4)}
          onKeyDown={(e) => handleKeyDown(e, "#contact")}
          className={styles.navitems}
          tabIndex={0}
        >
          <FormattedMessage id="navContact" defaultMessage="Contact" />
        </a>

        <div>
          <select
            className={styles.traduction}
            value={locale}
            onChange={handleLocaleChange}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
