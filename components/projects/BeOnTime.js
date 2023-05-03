import React, { useState, useEffect } from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Slide, Zoom, Flip, Bounce, Rotate, Fade, Roll } from "react-reveal";
import styles from "../../styles/descriptions.module.css"; 

SwiperCore.use([Pagination]);

const BeOnTime = () => {
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
    maxHeight: "85vh",
    maxWidth: "120vh",
    marginTop: "0.5vh",
    marginBottom: "5vh",
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
      maxHeight: "82vh",
      maxWidth: "130vh",
      marginTop: "0.5vh",
      marginBottom: "2.8vh",
      marginTop: "4vh",
      marginLeft: "80px",
      ...(screenWidth !== null &&
        screenWidth < 768 && {
          width: "95%",
          marginLeft: "10px",
        }),
    };

const renderBullet = (index, className) => {
  let bulletClassName = `${className} ${styles.bullet2}`;
  if (typeof swiper !== "undefined" && index === swiper.realIndex) {
    bulletClassName = `${className} ${styles.bulletActive2}`;
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
          <img src="/BeOnTime1.png" alt="Image 1" style={imgMegaStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/BeOnTime8.png" alt="Image 2" style={imgMegaStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/BeOnTime2.png" alt="Image 3" style={imgMegaStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/BeOnTime3.png" alt="Image 4" style={imgMegaStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/BeOnTime4.png" alt="Image 5" style={imgMegaStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/BeOnTime7.png" alt="Image 6" style={imgMegaStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/BeOnTime5.png" alt="Image 7" style={imgBigStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/BeOnTime6.png" alt="Image 8" style={imgBigStyle} />
        </SwiperSlide>
        <div
          className="swiper-pagination"
          style={{ position: "absolute", bottom: "0px" }}
        ></div>
      </Swiper>
    </Slide>
  );
};

export default BeOnTime;
