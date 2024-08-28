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
            <div className="w-full lg:h-[450px] flex justify-start items-center bg-opacity-30 px-20" style={{backgroundImage: `url(${item.img})`, backgroundPosition: "center", backgroundSize: "cover"}}>
              <div className="flex flex-col gap-4">
                <p className="text-3xl font-semibold text-white">{item.title}</p>
                <h1 className="text-5xl font-semibold text-orange-600 max-w-[750px]">{item.des}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainSlider;
