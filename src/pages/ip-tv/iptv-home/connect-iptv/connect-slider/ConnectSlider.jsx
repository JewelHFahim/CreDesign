import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../../../../../assets/hbo.png";
import img2 from "../../../../../assets/netflix.png";
import img3 from "../../../../../assets/prime video.png";
import img4 from "../../../../../assets/sky news.png";
import img5 from "../../../../../assets/skysports.png";
import img6 from "../../../../../assets/super rtl.png";
import img7 from "../../../../../assets/tv plus.png";
import img8 from "../../../../../assets/firetv.png";
import img9 from "../../../../../assets/cnn.png";
import img10 from "../../../../../assets/cannal.png";

// const ConnectSlider = () => {
//   const images = [
//     { img: img1 },
//     { img: img2 },
//     { img: img3 },
//     { img: img4 },
//     { img: img5 },
//     { img: img6 },
//     { img: img7 },
//     { img: img8 },
//     { img: img9 },
//     { img: img10 },
//   ];

//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         slidesPerView={7}
//         loop={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={false}
//         navigation={false}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper mt-16"
//       >
//         {images?.map((item, i) => (
//           <SwiperSlide key={i}>
//             <img src={item?.img} alt="" className="w-[200px]" />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// };

// export default ConnectSlider;

export default function ConnectSlider() {
  const images = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
    { img: img9 },
    { img: img10 },
  ];

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={false}
        navigation={false}
        loop={true}
        autoplay={{
          delay: 2500,
        }}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mt-16"
      >
        {images?.map((item, i) => (
          <SwiperSlide key={i}>
            <img src={item?.img} alt="" className="w-[200px]" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
