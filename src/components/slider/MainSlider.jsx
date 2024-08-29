import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MainSlider.css";
import "swiper/css";
import img1 from "../../assets/casino4.jpg";
import img2 from "../../assets/casino2.jpg";
import img3 from "../../assets/casino3.jpg";

const images = [
  {
    id: 1,
    img: img1,
    title: "ARE YOU READY?",
    des: "YOU COULD WALK AWAY WITH SOME EPIC CASH PRIZES!",
  },
  {
    id: 2,
    img: img2,
    title: "JOIN THE REVELRY",
    des: "FOR YOUR SHOT AT ROUNDS OF FREE SPINS!",
  },
  {
    id: 3,
    img: img3,
    title: "Bonus on your 1st deposit",
    des: "100% UP TO $1000",
  },
];

const MainSlider = () => {
  return (
    <>
      <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="z-[-1]"
      >
        {images.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-[250px] lg:h-[450px] flex justify-start items-center lg:bg-opacity-30 lg:px-20 lg:bg-cover bg-right lg:bg-center relative "
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="flex flex-col gap-2 lg:gap-4 w-full z-10 mx-4 lg:mx-0 uppercase">
                <p className="text-lg lg:text-3xl font-semibold text-white lg:max-w-[750px]">
                  {item.title}
                </p>
                <h1 className="text-xl lg:text-5xl font-semibold text-orange-600 w-full lg:max-w-[750px]">
                  {item.des}
                </h1>
              </div>
              <div className="w-full h-full bg-black absolute bg-opacity-[50%] lg:bg-opacity-[0%] z-0"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainSlider;
