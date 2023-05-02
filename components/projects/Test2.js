import React, { useState, useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);

function SimpleSwiper() {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper === null) {
      setSwiper(
        new Swiper(".swiper-container", {
            
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        })
      );
    }

    return () => {
      if (swiper !== null) {
        swiper.destroy(true, true);
      }
    };
  }, [swiper]);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src="/IaVolley1.png" alt="Image 1" />
        </div>
        <div className="swiper-slide">
          <img src="//IaVolley3.png" alt="Image 2" />
        </div>
        <div className="swiper-slide">
          <img src="//IaVolley2.png" alt="Image 3" />
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}

export default SimpleSwiper;
