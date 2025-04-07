import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import img1 from "../../puplic/assets/img4.png"
import img2 from "../../puplic/assets/img6.png"
import img3 from "../../puplic/assets/img7.png"

const SwiperSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={25}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="swipper"
      breakpoints={{
        // when window width is >= 320px
        0: {
          slidesPerView: 2, // for mobile
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3, // for tablets and up
        },
      }}
    >
      <SwiperSlide>
        <img src={img3} />
        <p>Revolutionizing Mobility with Patented Technology for Unmatched Stability and Safety</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} />
        <p>Revolutionizing Mobility with Patented Technology for Unmatched Stability and Safety</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} />
        <p>Revolutionizing Mobility with Patented Technology for Unmatched Stability and Safety</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} />
        <p>Revolutionizing Mobility with Patented Technology for Unmatched Stability and Safety</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} />
        <p>Revolutionizing Mobility with Patented Technology for Unmatched Stability and Safety</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} />
        <p>Revolutionizing Mobility with Patented Technology for Unmatched Stability and Safety</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
