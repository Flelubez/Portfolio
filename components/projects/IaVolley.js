import React, { useState, useEffect } from "react";

import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import { Slide } from "react-reveal";

import styles from "../../styles/descriptions.module.css"; 

SwiperCore.use([Pagination]);

const IaVolley = () => {
  const [screenWidth, setScreenWidth] = useState(null);

  //resize event listener
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
   marginBottom: "5vh",
   borderRadius: "1rem",
   ...(screenWidth !== null &&
     screenWidth < 768 && {
       width: "95%",
       marginLeft: "10px",
     }),
 };

  const imgBigStyle = {
    width: "100%",
    height: "auto",
    maxHeight: "75vh",
    maxWidth: "120vh",
    marginTop: "0.5vh",
    marginBottom: "6.8vh",
    borderRadius: "1rem",
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
   borderRadius: "1rem",
   ...(screenWidth !== null &&
     screenWidth < 768 && {
       width: "95%",
       marginLeft: "10px",
     }),
 };

   const imgUniqueStyle = {
     width: "55vh",
     height: "70vh",
     border: "3px solid white",
     marginTop: "0.5vh",
     marginBottom: "2.8vh",
     marginTop: "4vh",
     marginLeft: "300px",
     borderRadius: "1rem",
     ...(screenWidth !== null &&
       screenWidth < 768 && {
         marginTop: "0vh",
         width: "60%",
         height: "42vh",
         marginLeft: "80px",
       }),
   };


  //Allow setting of bullets and bullets when active
  const renderBullet = (index, className) => {
    let bulletClassName = `${className} ${styles.bullet2}`;
    if (typeof swiper !== "undefined" && index === swiper.realIndex) {
      bulletClassName = `${className} ${styles.bulletActive2}`;
    }
    return `<span class="${bulletClassName}"></span>`;
  };

  return (
    <div className={styles.containerRight}>
      <Slide right duration={2000}>
        <Swiper
          spaceBetween={300}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            renderBullet,
          }}
        >
          <SwiperSlide>
            <img src="/IaVolley1.png" alt="Image 1" style={imgMegaStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/IaVolley2.png" alt="Image 2" style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/IaVolley3.png" alt="Image 3" style={imgMegaStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/IaVolley4.png" alt="Image 4" style={imgBigStyle} />
          </SwiperSlide>
          <div
            className="swiper-pagination"
            style={{ position: "absolute", bottom: "0px" }}
          ></div>
        </Swiper>
      </Slide>
    </div>
  );
};

export default IaVolley;
