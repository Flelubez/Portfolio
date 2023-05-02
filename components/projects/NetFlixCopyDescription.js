import { useState, useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import { GiReturnArrow } from "react-icons/gi";
import { Slide, Zoom, Flip, Bounce, Rotate, Fade, Roll } from "react-reveal";

function IaVolleyDescription() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 768
  );

const handleKeyDown = (event, targetId) => {
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
    fontSize: "3rem",
    backgroundColor: "rgb(33, 31, 31)",
    color: "white",
    width: "30vw",
    height: "70vh",
    backfaceVisibility: "hidden",
    position: "absolute",
    top: 40,
    left: 30,
    zIndex: 1,
    border: "2px solid grey",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "0px 0px 10px 5px rgba(27, 39, 82, 0.5)",
    ...(screenWidth < 768 && {
      width: "80%",
      fontSize: "1.5rem",
      lineHeight: "2rem",
    }),
  };

  const cardBackStyle = {
    border: "2px solid grey",
    textAlign: "center",
    backgroundColor: "rgb(33, 31, 31)",
    color: "white",
    width: "30vw",
    height: "70vh",
    backfaceVisibility: "hidden",
    position: "absolute",
    top: 40,
    right: 50,
    borderRadius: "10px",
    transform: "rotateY(-180deg)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "2rem",
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
  };

  const imageStyleFront = {
    height: "90%",
    width: "93%",
    marginTop: "2%",
    textAlign: "center",
    position: "absolute",
    zIndex: -1,
  };

  const imageStyleBack = {
    height: "40%",
    width: "70%",
    textAlign: "center",
    position: "absolute",
    zIndex: -1,
    marginTop: "68%",
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Slide left duration={2000}>
      <div
        onClick={handleClick}
        onKeyDown={(e) => handleKeyDown(e, "#my-projects")}
        tabIndex={0}
        style={containerStyle}
      >
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide" style={cardStyle}>
              <div style={cardInnerStyle} onClick={handleClick}>
                <div style={cardFrontStyle}>
                  <img
                    style={imageStyleFront}
                    src="/18.png"
                    alt="Soft Skills"
                  />
                  <div>Netflix Copy </div>
                  <div
                    style={buttonStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <GiReturnArrow />
                  </div>
                </div>
                <div style={cardBackStyle}>
                  <img style={imageStyleBack} src="/18.png" alt="Soft Skills" />
                  <div style={{ textAlign: "left", marginLeft: "50px" }}>
                    Voici mon premier projet, appelé BeOnTime. Ce projet à été
                    manager par moi-même et en collaboration avec 3 étudiants.
                    Le but est d'aider les comptables afin de mieux gérer leur
                    temps, leurs missions et ainsi fluidifié leur travail via
                    une application complète.
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