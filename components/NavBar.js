import React from "react";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/navBar.module.css";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../reducers/language";
import { toggleTheme } from "../reducers/theme";
import { FaMoon, FaRegLightbulb } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { HiSun } from "react-icons/hi";




function NavBar({ updateSectionIndex }) {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.language.value);
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
    // console.log(darkMode, "Le mode dark/light a été basculé");
  };


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
      className={darkMode ? styles.container : styles.containerLight}
      style={{ position: "fixed", top: 0, zIndex: 100 }}
    >
      <div className={styles.links}>
        <a
          onClick={(e) => handleClick(e, "#about-me", 1)}
          onKeyDown={(e) => handleKeyDown(e, "#about-me")}
          className={darkMode ? styles.navitems : styles.navitemsLight}
          tabIndex={0}
        >
          <FormattedMessage id="navAbout" defaultMessage="About" />
        </a>
        <a
          onClick={(e) => handleClick(e, "#skills", 2)}
          onKeyDown={(e) => handleKeyDown(e, "#skills")}
          className={darkMode ? styles.navitems : styles.navitemsLight}
          tabIndex={0}
        >
          <FormattedMessage id="navSkills" defaultMessage="Skills" />
        </a>
        <a
          onClick={(e) => handleClick(e, "#my-projects", 3)}
          onKeyDown={(e) => handleKeyDown(e, "#my-projects")}
          className={darkMode ? styles.navitems : styles.navitemsLight}
          tabIndex={0}
        >
          <FormattedMessage id="navProjects" defaultMessage="Projects" />
        </a>
        <a
          onClick={(e) => handleClick(e, "#contact", 4)}
          onKeyDown={(e) => handleKeyDown(e, "#contact")}
          className={darkMode ? styles.navitems : styles.navitemsLight}
          tabIndex={0}
        >
          <FormattedMessage id="navContact" defaultMessage="Contact" />
        </a>

        <div>
          <select
            className={darkMode ? styles.traduction : styles.traductionLight}
            value={locale}
            onChange={handleLocaleChange}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </div>
        <span
          onClick={handleThemeToggle}
          onKeyDown={(e) => e.keyCode === 32 && handleThemeToggle()}
          className={darkMode ? styles.moon : styles.moonLight}
          tabIndex={0}
          aria-label="Basculer le mode dark/light"
          role="button"
        >
          {darkMode ? <HiSun /> : <FaMoon />}
        </span>
      </div>
    </div>
  );
}

export default NavBar;
