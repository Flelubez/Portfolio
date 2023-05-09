import { useState, useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import { GiReturnArrow } from "react-icons/gi";
import { Slide } from "react-reveal";
import styles from "../../styles/descriptions.module.css";
import { FormattedMessage } from "react-intl";

function IaVolleyDescription() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 768
  );

  const handleKeyDown = (event) => {
    if (event.keyCode === 32) {
      event.preventDefault();
      handleClick();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    new Swiper(".swiper-container", {
      effect: "flip",
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const containerStyle = {
    fontSize: "125%",
  };

  const cardStyle = {
    width: "100%",
    height: "100%",
    perspective: "1000px",
  };

  const cardInnerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    transition: "transform 1.2s ease-in-out",
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
  };

  const cardFrontStyle = {
    textAlign: "center",
    backgroundColor: "#3e5cb6",
    color: "white",
    backfaceVisibility: "hidden",
    position: "absolute",
    top: 40,
    left: 30,
    zIndex: 1,
    border: "1px solid grey",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "0px 0px 10px 5px rgba(27, 39, 82, 0.5)",
  };

  const cardBackStyle = {
    border: "1px solid grey",
    textAlign: "center",
    backgroundColor: "#3e5cb6",
    color: "white",
    backfaceVisibility: "hidden",
    position: "absolute",
    top: 40,
    right: 50,
    borderRadius: "10px",
    transform: "rotateY(-180deg)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    lineHeight: "3rem",
    boxShadow: "0px 0px 10px 5px rgba(27, 39, 82, 0.5)",
    ...(screenWidth < 768 && {
      width: "80%",
      fontSize: "1.5rem",
      lineHeight: "2rem",
    }),
  };

  const buttonStyle = {
    color: isHovered ? "#79b6f2" : "white",
    fontSize: "4rem",
    cursor: "pointer",
    textAlign: "center",
    transition: "color 1s ease-in-out",
    transitionDuration: "1s",
    marginTop: "5%",
  };


  const imageStyleFront = {
    position: "absolute",
    zIndex: -1,
  };

  const imageStyleBack = {
    position: "absolute",
    zIndex: -1,
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Slide left duration={2000}>
      <div
        onClick={handleClick}
        onKeyDown={(e) => handleKeyDown(e, "#my-projects")}
        style={containerStyle}
      >
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide" style={cardStyle}>
              <div style={cardInnerStyle}>
                <div className={styles.cardFront} style={cardFrontStyle}>
                  <img
                    className={styles.imageFront}
                    style={imageStyleFront}
                    src="/18.png"
                    alt="Soft Skills"
                  />
                  <div tabIndex={0}>IA Volley</div>
                  <div
                    style={buttonStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <GiReturnArrow />
                  </div>
                </div>
                <div style={cardBackStyle} className={styles.cardBack}>
                  <img
                    style={imageStyleBack}
                    className={styles.imageBack}
                    src="/18.png"
                    alt="Soft Skills"
                  />

                  <div style={{ textAlign: "left", marginLeft: "50px" }}>
                    <FormattedMessage
                      id="iaVolleyDescription"
                      defaultMessage="IaVolley, my fourth project, allowed me to explore artificial intelligence through the Brain.js library. The interface, connected to a backend and a database, enables the addition and utilization of data processed by the neural network to predict victories and defeats based on observed statistics."
                    />
                  </div>
                  <div
                    style={buttonStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <GiReturnArrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </Slide>
  );
}
export default IaVolleyDescription;
