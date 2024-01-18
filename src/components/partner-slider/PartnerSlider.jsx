import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import img1 from "../../assets/p1.png";
import img2 from "../../assets/p2.png";
import img3 from "../../assets/p3.png";
import img4 from "../../assets/p4.png";
import img5 from "../../assets/p5.png";
import img6 from "../../assets/p6.png";



const PartnerSlider = () => {
    
  const datas = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img3 },
    { img: img6 },
    { img: img3 },
  ];

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        slidesPerView={6}
        pagination={false}
        navigation={false}
        centeredSlides={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="mt-5 flex justify-center items-center"
      >
        {datas.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="w-[150px] h-[150px]">
              <img src={item.img} alt="" className="object-cover w-full h-full rounded-full"/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PartnerSlider;
