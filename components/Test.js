import React, { useRef, useEffect, useState } from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import styles from "../styles/test.module.css";

const ParallaxComponent = () => {
  const ref = useRef(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const elementHeight = ref.current.clientHeight;
    const scrollDistance =
      window.pageYOffset + windowHeight - ref.current.offsetTop;
    const opacity = Math.max(
      0,
      Math.min(1, 1 - scrollDistance / elementHeight)
    );
    setOpacity(opacity.toFixed(2));
  };

  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[
          {
            image: "https://example.com/image.jpg",
            amount: 0.3,
          },
        ]}
        style={{
          color: "black",
          height: "400vh",
          backgroundColor: "red",
        }}
      />
      <div className={styles.parallaxcontent} ref={ref} style={{ opacity }}>
        <h2>Titre de la section</h2>
        <p>Contenu de la section</p> <h2>Titre de la section</h2>
        <p>Contenu de la section</p> <h2>Titre de la section</h2>
        <p>Contenu de la section</p> <h2>Titre de la section</h2>
        <p>Contenu de la section</p> <h2>Titre de la section</h2>
        <p>Contenu de la section</p> <h2>Titre de la section</h2>
        <p>Contenu de la section</p> <h2>Titre de la section</h2>
        <p>Contenu de la section</p> <h2>Titre de la section</h2>
        <p>Contenu de la section</p> <h2>Titre de la section</h2>
        <p>Contenu de la section</p>
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxComponent;
