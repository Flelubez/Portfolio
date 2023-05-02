import React, { useState, useEffect } from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Slide, Zoom, Flip, Bounce, Rotate, Fade, Roll } from "react-reveal";

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

  const bulletStyle =
    "width: 40px; height: 40px; color: #3e5cb6; opacity: 0.6; border-radius: 50%; margin: 5px;";
  const bulletActiveStyle =
    "width: 40px; height: 40px; color: #3e5cb6; opacity: 1; border-radius: 50%; margin: 5px;";

  const renderBullet = (index, className) => {
    let style = bulletStyle;
    if (typeof swiper !== "undefined" && index === swiper.realIndex) {
      style = bulletActiveStyle;
    }
    return `<span class="${className}" style="${style}"></span>`;
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
            src="/trainNetFlix1.png"
            alt="Train NetFlix 1"
            style={imgStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/trainNetFlix2.png"
            alt="Train NetFlix 2"
            style={imgStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/trainNetFlix3.png"
            alt="Train NetFlix 3"
            style={imgStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/trainNetFlix4.png"
            alt="Train NetFlix 4"
            style={imgBigStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/trainNetFlix5.png"
            alt="Train NetFlix 5"
            style={imgBigStyle}
          />
        </SwiperSlide>
        <div
          className="swiper-pagination"
          style={{ position: "absolute", bottom: "-5px" }}
        ></div>
      </Swiper>
    </Slide>
  );
};

export default NetFlixCopy;
