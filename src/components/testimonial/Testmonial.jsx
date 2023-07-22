import React from "react";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "./testmonial.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Testmonial() {
  return (
    <div className="testimoniail section container">
      <h2 className="section__title">My Clinet Say</h2>
      <span className="section__subtitle">Testimonial</span>
      <Swiper
        className="testimoniail__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimoniail__card">
              <img src={image} alt="" className="testimoniail__img" />
              <h3 className="testimoniail__name">{title}</h3>
              <p className="testimoniail__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testmonial;
