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
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images?.map((item, i) => (
          <SwiperSlide key={i} className="rounded-[18px] overflow-hidden">
            <img
              src={item?.img}
              alt=""
              className="rounded-[15px] object-cover w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MovieDisplaySlider;
