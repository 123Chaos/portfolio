import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  { avatar: AVTR1, name: "a", review: "sadsafasfsafsafafaafwqqwv" },
  { avatar: AVTR2, name: "b", review: "sadsafasfsafsafafaafwqqwv" },
  { avatar: AVTR3, name: "c", review: "sadsafasfsafsafafaafwqqwv" },
  { avatar: AVTR4, name: "d", review: "sadsafasfsafsafafaafwqqwv" },
];
const Testimonials = () => {
  return (
    <section>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar 1" />
              </div>
              <h5>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
