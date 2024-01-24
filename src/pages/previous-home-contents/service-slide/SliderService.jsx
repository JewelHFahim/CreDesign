import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SlSupport } from "react-icons/sl";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SliderService() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={6}
        autoplay={{ delay: 2500, disableOnInteraction: false,}}
        pagination={false}
        loop={true}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((item, i) => (
          <SwiperSlide key={i}>
            <div className="w-[150px] h-[100px] rounded-md bg-orange-200 flex justify-center items-center">
              <SlSupport className="text-[35px]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
