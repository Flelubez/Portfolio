import React, { useState, useEffect } from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Slide, Zoom, Flip, Bounce, Rotate, Fade, Roll } from "react-reveal";
import styles from "../../styles/descriptions.module.css"; 

SwiperCore.use([Pagination]);

const NetFlixCopy = () => {
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);

      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const imgStyle = {
    width: "100%",
    height: "auto",
    maxHeight: "85vh",
    maxWidth: "120vh",
    marginTop: "50px",
    marginLeft: "100px",
    marginBottom: "5vh",
    ...(screenWidth !== null &&
      screenWidth < 768 && {
        width: "95%",
        marginLeft: "10px",
      }),
  };

  const imgBigStyle = {
    width: "100%",
    height: "auto",
    maxHeight: "79vh",
    maxWidth: "120vh",
    marginTop: "0.5vh",
    marginBottom: "2.8vh",
    marginLeft: "100px",
    ...(screenWidth !== null &&
      screenWidth < 768 && {
        width: "95%",
        marginLeft: "10px",
      }),
  };

    const imgMegaStyle = {
      width: "100%",
      height: "auto",
      maxHeight: "71vh",
      maxWidth: "100vh",
      marginTop: "0.5vh",
      marginBottom: "2.8vh",
      marginTop: "4vh",
      marginLeft: "100px",
      ...(screenWidth !== null &&
        screenWidth < 768 && {
          width: "95%",
          marginLeft: "10px",
        }),
    };

        const imgUniqueStyle = {
          width: "55vh",
          height: "70vh",
          marginTop: "0.5vh",
          marginBottom: "2.8vh",
          marginTop: "4vh",
          marginLeft: "400px",
          ...(screenWidth !== null &&
            screenWidth < 768 && {
              marginTop: "0vh",
              width: "60%",
              height: "42vh",
              marginLeft: "80px",
            }),
        };

const renderBullet = (index, className) => {
  let bulletClassName = `${className} ${styles.bullet}`;
  if (typeof swiper !== "undefined" && index === swiper.realIndex) {
    bulletClassName = `${className} ${styles.bulletActive}`;
  }
  return `<span class="${bulletClassName}"></span>`;
};

  return (
    <Slide right duration={2000}>
      <Swiper
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          renderBullet,
        }}
      >
        <SwiperSlide>
          <img
            src="/NetflixCopy1.png"
            alt=" NetflixCopy 1"
            style={imgMegaStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/NetflixCopy2.png" alt="NetflixCopy 2" style={imgStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/NetflixCopy3.png"
            alt="NetflixCopy 3"
            style={imgMegaStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/NetflixCopy4.png"
            alt="NetflixCopy1 4"
            style={imgBigStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/NetflixCopy6.png"
            alt="NetflixCopy1 5"
            style={imgUniqueStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/NetflixCopy5.png"
            alt="NetflixCopy 6"
            style={imgBigStyle}
          />
        </SwiperSlide>
        <div
          className="swiper-pagination"
          style={{ position: "absolute", bottom: "18px" }}
        ></div>
      </Swiper>
    </Slide>
  );
};

export default NetFlixCopy;
