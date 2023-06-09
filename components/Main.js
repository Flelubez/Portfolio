import React, { useState, useEffect } from "react";

import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import MyProjects from "@/components/MyProjects";
import LandingOnSite from "@/components/LandingOnSite";
import SoftSkills from "./SoftSkills";
import Contact from "./Contact";
import Footer from "./Footer";

import styles from "../styles/main.module.css";

import { scroller } from "react-scroll";

import { Slide } from "react-reveal";

import { useSelector } from "react-redux";


function Main() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [lastScrollTime, setLastScrollTime] = useState(0);

   const darkMode = useSelector((state) => state.theme.darkMode);

  //to have window size on logs
  /*
    const handleResize = () => {
      console.log(window.innerWidth);
    };

    useEffect(() => {
      // Ajoute l'écouteur d'événement "resize" à la fenêtre
      window.addEventListener("resize", handleResize);

      // Supprime l'écouteur d'événement "resize" lors du nettoyage
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);*/
  
    //Scroll section by section
  const updateSectionIndex = (newIndex) => {
    setCurrentStepIndex(newIndex);
  };

  const sections = [
    { id: "landing", offset: 0 },
    { id: "about-me", offset: -75 },
    { id: "skills", offset: -75 },
    { id: "my-projects", offset: -66 },
    { id: "my-projects2", offset: -80 },
    { id: "my-projects3", offset: -80 },
    { id: "my-projects4", offset: -80 },
    { id: "contact", offset: -20 },
  ];

  //Stop auto scroll bellow 1450px
const handleScroll = (e) => {
  if (window.innerWidth < 1450) {
    return;
  }

  //console.log(currentStepIndex);
  e.preventDefault();
  const currentTime = new Date().getTime();
  const direction = e.deltaY > 0 ? 1 : -1;
  let nextIndex = currentStepIndex + direction;

  // Check if double scroll occurred within 500ms
  if (currentTime - lastScrollTime < 300) {
    // Ignore this scroll and scroll to the current section again
    scroller.scrollTo(sections[currentStepIndex].id, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: sections[currentStepIndex].offset,
    });
    return;
  }

  // Update last scroll time
  setLastScrollTime(currentTime);

  // Check if next index is valid and scroll to it
  if (nextIndex >= 0 && nextIndex < sections.length) {
    setCurrentStepIndex(nextIndex);
    scroller.scrollTo(sections[nextIndex].id, {
      duration: 600,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: sections[nextIndex].offset,
    });
  }
};

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentStepIndex]);

return (
  <div className={darkMode ? styles.container : styles.containerLight}>
    <div>
      <NavBar updateSectionIndex={updateSectionIndex} />
    </div>
    <div>
      <section name="landing" id="landing">
        <Slide left duration={2000}>
          <LandingOnSite />
        </Slide>
      </section>
      <section name="about-me" id="about-me">
        <Header />
      </section>
      <section name="skills" id="skills">
        <SoftSkills />
      </section>
      <section name="my-projects" id="my-projects">
        <MyProjects />
      </section>
      <section name="contact" id="contact">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  </div>
);


}

export default Main;