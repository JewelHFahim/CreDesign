/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const MovieDisplaySlider = ({ images }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images?.map((item, i) => (
          <SwiperSlide key={i} className="rounded-[18px] overflow-hidden">
            <img src={item?.img} alt="" className="rounded-[15px] object-cover w-full h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MovieDisplaySlider;
